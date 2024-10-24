import MenuTitle from "./MenuTitle";

const MainMenu = () => {
  return (
    <div className="bg-muted overflow-auto p-4">
      <div className="border-b dark:border-b-black border-b-zinc-300 pb-4">
        <MenuTitle />
      </div>
    </div>
  );
};

export default MainMenu;
