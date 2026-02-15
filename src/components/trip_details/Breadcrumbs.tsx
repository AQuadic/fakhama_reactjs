const Breadcrumbs = () => {
    return (
        <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center gap-1 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <li className="inline-flex items-center">
                    <a href="#" className="text-[#121212] inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">
                        الوجهات
                    </a>
                </li>
                <li>
                    <div className="flex items-center space-x-1.5">
                        <svg className="w-6 h-6 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#121212" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                        <a href="#" className="text-[#121212] inline-flex items-center text-sm font-medium text-body hover:text-fg-brand">البرامج السياحية</a>
                    </div>
                </li>
                <li aria-current="page">
                    <div className="flex items-center space-x-1.5">
                        <svg className="w-6 h-6 rtl:rotate-180 text-body" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="#121212" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 5 7 7-7 7" /></svg>
                        <span className="text-[#505050] inline-flex items-center text-sm font-medium text-body-subtle">عمرة رمضان-مكة المكرمة</span>
                    </div>
                </li>
            </ol>
        </nav>
    )
}

export default Breadcrumbs
