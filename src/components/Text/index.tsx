import Translator from '../Translator';

export const Title: React.FC = () => {
  return (
    <p className="text-2xl font-bold text[#2E2B2B]">
      <Translator path="home.headerTitle" />
    </p>
  );
};

export const SubTitle: React.FC = () => {
  return (
    <p className="text-[#666666]">
      <Translator path="home.headerSubTitle" />
    </p>
  );
};
