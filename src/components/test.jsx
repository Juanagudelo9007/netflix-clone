createPortal(
  <div className="fixed flex flex-col inset-0 justify-center bg-black/80 backdrop-blur-xl">
    <div className="h-12 w-12 border-6 border-red-600 border-t-transparent rounded-full animate-spin"></div>
    Loading...
  </div>,
  document.getElementById("loadingOverlay")
);
