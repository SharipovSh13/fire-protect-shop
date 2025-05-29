export default function CompanyEmail({email}:{email:string}) {
    return < >
        <a className="hover:text-green-500 hover:font-bold dark:hover:text-green-700 font-bold" href={`mailto:${email}`}>
        {email} 
        </a>
        </>
}