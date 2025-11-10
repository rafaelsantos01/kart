import Hero from "@/components/Hero";
import RankingTable from "@/components/RankingTable";
import PodiumSection from "@/components/PodiumSection";
import DriversGrid from "@/components/DriverGrid";


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <RankingTable />
      <PodiumSection />
      <DriversGrid />

      {/* Footer */}
      <footer className="border-t border-border bg-secondary/30 py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 Kart Racing. Sistema de Rankings para Pilotos Amadores.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
