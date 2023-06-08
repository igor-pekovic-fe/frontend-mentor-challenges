export default function Header() {
  return (
    <div className="flex justify-between px-4 py-6 bg-white shadow dark:bg-dark-blue dark:text-lightmode-bg">
      <h1 className="font-extrabold">Where in the world?</h1>
      <button className="font-semibold flex gap-2 items-center">
        <ion-icon name="moon-outline"></ion-icon>Dark Mode
      </button>
    </div>
  );
}
