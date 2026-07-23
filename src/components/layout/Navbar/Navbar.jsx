import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div>
            <h1 className="text-2xl font-bold text-blue-600">
              Kartik<span className="text-gray-900">.AI</span>
            </h1>
          </div>

          {/* Navigation */}
          <NavLinks />

          {/* CTA */}
          <Button>Hire Me</Button>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;