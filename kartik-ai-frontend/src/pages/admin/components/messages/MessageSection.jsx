import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, RefreshCw, Search } from "lucide-react";

import {
  getAllContacts,
  updateContactStatus,
  deleteContact,
} from "@/api/contact.api";

import MessageTable from "./MessageTable";
import MessageFilters from "./MessageFilters";
import MessagePagination from "./MessagePagination";
import MessageModal from "./MessageModal";
import DeleteMessageModal from "./DeleteMessageModal";
import MessageSkeleton from "./MessageSkeleton";
import MessageEmpty from "./MessageEmpty";

const MessageSection = () => {
  // =========================
  // State
  // =========================

  const [messages, setMessages] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  const [search, setSearch] = useState("");

  const [activeFilter, setActiveFilter] = useState("all");

  const [currentPage, setCurrentPage] = useState(1);

  const [selectedMessage, setSelectedMessage] = useState(null);

  const [viewOpen, setViewOpen] = useState(false);

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [statusLoading, setStatusLoading] = useState(false);

  // =========================
  // GET ALL MESSAGES
  // =========================

  const fetchMessages = async () => {
    try {
      setError("");
      setLoading(true);

      const response = await getAllContacts();

      setMessages(response.contacts || []);
    } catch (error) {
      console.error("Failed to fetch messages:", error);

      setError(error.response?.data?.message || "Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // INITIAL FETCH
  // =========================

  useEffect(() => {
    fetchMessages();
  }, []);

  // =========================
  // UPDATE MESSAGE STATUS
  // =========================

  const handleStatusUpdate = async (id, status) => {
    try {
      setError("");
      setStatusLoading(true);

      const response = await updateContactStatus(id, status);

      const updatedMessage = response.contact;

      // Update messages state
      setMessages((prevMessages) =>
        prevMessages.map((message) =>
          message._id === updatedMessage._id ? updatedMessage : message,
        ),
      );

      // Update selected message
      setSelectedMessage(updatedMessage);
    } catch (error) {
      console.error("Failed to update message status:", error);

      setError(
        error.response?.data?.message || "Failed to update message status",
      );
    } finally {
      setStatusLoading(false);
    }
  };

  // =========================
  // DELETE MESSAGE
  // =========================

  const handleDeleteMessage = async () => {
    if (!selectedMessage?._id) return;

    try {
      setError("");
      setDeleteLoading(true);

      await deleteContact(selectedMessage._id);

      // Remove deleted message from state
      setMessages((prevMessages) =>
        prevMessages.filter((message) => message._id !== selectedMessage._id),
      );

      // Close modal
      setDeleteOpen(false);

      setSelectedMessage(null);
    } catch (error) {
      console.error("Failed to delete message:", error);

      setError(error.response?.data?.message || "Failed to delete message");
    } finally {
      setDeleteLoading(false);
    }
  };

  // =========================
  // FILTER + SEARCH
  // =========================

  const filteredMessages = useMemo(() => {
    let data = [...messages];

    // Status filter

    if (activeFilter === "read") {
      data = data.filter((item) => item.status === "read");
    }

    if (activeFilter === "unread") {
      data = data.filter((item) => item.status === "unread");
    }

    // Search

    if (search.trim()) {
      const searchValue = search.toLowerCase().trim();

      data = data.filter(
        (item) =>
          item.name?.toLowerCase().includes(searchValue) ||
          item.email?.toLowerCase().includes(searchValue) ||
          item.message?.toLowerCase().includes(searchValue),
      );
    }

    return data;
  }, [messages, activeFilter, search]);

  // =========================
  // STATS
  // =========================

  const total = messages.length;

  const unread = messages.filter(
    (message) => message.status === "unread",
  ).length;

  const read = messages.filter((message) => message.status === "read").length;

  // =========================
  // VIEW MESSAGE
  // =========================

  const handleViewMessage = async (message) => {
    setSelectedMessage(message);

    setViewOpen(true);

    // Automatically mark unread message as read
    if (message.status === "unread") {
      await handleStatusUpdate(message._id, "read");
    }
  };

  // =========================
  // RENDER
  // =========================

  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 25,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.35,
      }}
      className="space-y-6"
    >
      {/* ================= HEADER ================= */}

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-cyan-500/10 p-3">
            <MessageSquare className="h-7 w-7 text-cyan-400" />
          </div>

          <div>
            <h1 className="text-3xl font-bold text-white">Messages</h1>

            <p className="text-sm text-zinc-400">
              Manage contact form messages
            </p>
          </div>
        </div>

        {/* Search + Refresh */}

        <div className="flex flex-col gap-3 sm:flex-row">
          {/* Search */}

          <div className="relative">
            <Search
              size={18}
              className="
                absolute
                left-4
                top-1/2
                -translate-y-1/2
                text-zinc-500
              "
            />

            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setCurrentPage(1);
              }}
              placeholder="Search message..."
              className="
                h-11
                w-full
                rounded-xl
                border
                border-white/10
                bg-zinc-900/70
                pl-11
                pr-4
                text-white
                outline-none
                placeholder:text-zinc-500
                focus:border-cyan-500
                sm:w-72
              "
            />
          </div>

          {/* Refresh */}

          <button
            type="button"
            onClick={fetchMessages}
            disabled={loading}
            className="
              flex
              h-11
              items-center
              justify-center
              gap-2
              rounded-xl
              border
              border-white/10
              bg-blue-600/20
              px-5
              text-white
              transition
              hover:bg-blue-600
              disabled:cursor-not-allowed
              disabled:opacity-50
            "
          >
            <RefreshCw size={18} className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>
      </div>

      {/* ================= ERROR ================= */}

      {error && (
        <div
          className="
            rounded-2xl
            border
            border-red-500/20
            bg-red-500/10
            px-5
            py-4
            text-sm
            text-red-400
          "
        >
          {error}
        </div>
      )}

      {/* ================= STATS ================= */}

      <div className="grid gap-4 md:grid-cols-3">
        {/* Total */}

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-400">Total Messages</p>

          <h2 className="mt-2 text-3xl font-bold text-white">{total}</h2>
        </div>

        {/* Unread */}

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-400">Unread</p>

          <h2 className="mt-2 text-3xl font-bold text-cyan-400">{unread}</h2>
        </div>

        {/* Read */}

        <div className="rounded-2xl border border-white/10 bg-zinc-900/60 p-5">
          <p className="text-sm text-zinc-400">Read</p>

          <h2 className="mt-2 text-3xl font-bold text-green-400">{read}</h2>
        </div>
      </div>

      {/* ================= FILTERS ================= */}

      <MessageFilters
        activeFilter={activeFilter}
        onFilterChange={(filter) => {
          setActiveFilter(filter);
          setCurrentPage(1);
        }}
        total={total}
        unread={unread}
        read={read}
      />

      {/* ================= CONTENT ================= */}

      {loading ? (
        <MessageSkeleton />
      ) : filteredMessages.length === 0 ? (
        <MessageEmpty />
      ) : (
        <>
          <MessageTable
            messages={filteredMessages}
            onView={handleViewMessage}
            onDelete={(message) => {
              setSelectedMessage(message);
              setDeleteOpen(true);
            }}
          />

          <MessagePagination
            currentPage={currentPage}
            totalPages={1}
            onPageChange={setCurrentPage}
          />
        </>
      )}

      {/* ================= VIEW MODAL ================= */}

      <MessageModal
        open={viewOpen}
        setOpen={setViewOpen}
        message={selectedMessage}
        loading={statusLoading}
      />

      {/* ================= DELETE MODAL ================= */}

      <DeleteMessageModal
        open={deleteOpen}
        setOpen={setDeleteOpen}
        message={selectedMessage}
        loading={deleteLoading}
        onDelete={handleDeleteMessage}
      />
    </motion.section>
  );
};

export default MessageSection;
