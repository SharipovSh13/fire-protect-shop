export default function PhoneNumberCompany({companyNumber}:{companyNumber:number |string}) {
    return <p className="hover:text-green-500 hover:font-bold dark:hover:text-green-700">
        <a href={`tel:+992${companyNumber}`}>
        +992{companyNumber} 
        </a>
        </p>
}