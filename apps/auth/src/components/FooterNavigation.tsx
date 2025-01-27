import footerList from '../constants/footerList.ts'
function FooterNavigation() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-list">
          {footerList.map((listItem) => (
            <li key={listItem}>{listItem}</li>
          ))}
        </ul>
        <div className="footer-copy-right">
          <span>English</span>
          <span>© 2025 Instagram from Meta</span>
        </div>
      </nav>
    </footer>
  )
}

export default FooterNavigation
