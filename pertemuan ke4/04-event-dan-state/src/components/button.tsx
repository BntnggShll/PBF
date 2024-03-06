export function Tombol_2({ isiPesan, namaTombol }) {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 ☐ text-white p-2 rounded"
      onClick={() => alert(isiPesan)}
    >
      {namaTombol}
    </button>
  );
}

export default function Tombol_1() {
  function handleClick() {
    alert("Tombol telah ditekan!!!");
  }

  return (
    <button
      className="bg-red-500 hover:bg-red-700 text-white p-2 rounded"
      onClick={handleClick}
    >
      Tombol 1
    </button>
  );
}
