import { Route, Routes } from 'react-router-dom';
import { CharacterGallery } from './components/characters/CharacterGallery';
import { CharacterDetail } from './components/characters/CharacterDetail';
import { MechanicGallery } from './components/mechanics/MechanicGallery';
import { MechanicDetail } from './components/mechanics/MechanicDetail';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<CharacterGallery />} />
      <Route path="/mecanicas" element={<MechanicGallery />} />
      <Route path="/mecanicas/:mechanicId" element={<MechanicDetail />} />
      <Route path="/:characterId" element={<CharacterDetail />} />
    </Routes>
  );
}
