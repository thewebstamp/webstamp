// components/Footer.tsx

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} The Webstamp Agency. All rights reserved.</p>
        <p className="mt-2 text-sm">Lead generation & automation for contractors & landscapers.</p>
      </div>
    </footer>
  )
}