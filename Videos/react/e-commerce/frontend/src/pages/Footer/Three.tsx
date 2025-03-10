const content ="font-light"

const Three = () => {
  return (
      <div>
            <div className="flex flex-col gap-4 max-sm:text-center">
              <h1 className="font-bold tracking-wide text-[1.3rem]">Quick Link</h1>
              <a href="#" className={content}>Privacy Policy</a>
              <a href="#" className={content}>Terms of use</a>
              <a href="#" className={content}>FAQ</a>
              <a href="#" className={content}>Contact</a>
          </div>
    </div>
  )
}

export default Three