import Header from "./Components/Header";
import Galerie from "./Components/Galerie";
import VillaInfos from "./Components/VillaInfos";
import ThreeDModelViewer from "./Components/ThreeDModelviewer";

export default function Home() {
  return (
    <>
    <Header/>
    <Galerie/>
    <VillaInfos
    surface={120}
    bedrooms={6}
    bathrooms={6}
    hasPool={true}
    hasKitchen={true}
    />
     <div className="p-6">
      <h1 className="text-2xl text-white font-bold mb-4">Mon objet 3D en 360°</h1>
      <ThreeDModelViewer />
    </div>

    
    </>
  );
}
