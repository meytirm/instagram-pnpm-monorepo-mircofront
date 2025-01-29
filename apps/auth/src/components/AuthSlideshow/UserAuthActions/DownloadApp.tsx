function DownloadApp() {
  return (
    <div className="flex flex-col items-center">
      <span className="my-4">Get the app.</span>
      <div className="flex gap-2">
        <a href="#">
          <img
            className="h-[40px]"
            src="http://localhost:3001/google-play.png"
            alt="google play"
          />
        </a>
        <a href="#">
          <img
            className="h-[40px]"
            src="http://localhost:3001/app-store.png"
            alt="app store"
          />
        </a>
      </div>
    </div>
  )
}

export default DownloadApp
