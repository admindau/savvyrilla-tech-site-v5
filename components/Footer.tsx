export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="container-responsive py-8 text-sm text-slate-600 dark:text-slate-400 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Savvy Gorilla Technologies. All rights reserved.</p>
        <p className="opacity-80">savvyrilla.tech • Innovating Africa’s Digital Future</p>
      </div>
    </footer>
  );
}
