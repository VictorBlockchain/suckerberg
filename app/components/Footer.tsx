export default function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-lg font-bold text-facebook-blue mb-2">Suckerberg</h3>
            <p className="text-sm text-gray-600">Definitely not stealing your data since 2023</p>
          </div>
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Pretend Links</h4>
            <ul className="text-sm text-gray-600">
              <li><a href="#" className="hover:text-facebook-blue">About Us (It's all lies)</a></li>
              <li><a href="#" className="hover:text-facebook-blue">Careers (We're always hiring more bots)</a></li>
              <li><a href="#" className="hover:text-facebook-blue">Privacy Policy (LOL)</a></li>
              <li><a href="#" className="hover:text-facebook-blue">Terms of Service (You agree to everything)</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-sm font-bold text-gray-700 mb-2">Connect with us</h4>
            <p className="text-sm text-gray-600">Just kidding, we're already connected to everything you do online</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-600">
          <p>&copy; 2025 Suckerberg.xyz. All your rights are belong to us.</p>
        </div>
      </div>
    </footer>
  )
}

