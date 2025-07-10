import React,{useEffect} from 'react'
import ResultsPage from '../../components/User/ResultsPage'
import { useSelector } from 'react-redux'
import Header from '../../components/User/Header'
import PromoHeader from '../../components/User/PromoHeader'

function ClinicResultsPage() {
    const location = useSelector((state) => state.location)
    console.log("first", location)
    // console.log("location: ", location, answers)

    useEffect(() => {
      if (window.gtag) {
        console.log('Sending Google Ads conversion event');
        window.gtag('event', 'conversion', {
          send_to: 'AW-17108722657/OrmZCLbQmd0aEOHHid4_',
        });
      } else {
        console.warn('gtag not available on window');
      }
    }, []);


  return (
    <div className="min-h-screen bg-gray-50">
      <PromoHeader/>
      {/* <Header /> */}
      <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-8">
          <ResultsPage location={location.location} answers={location.answers} />
        </div>
      </div>
    </div>
  )
}

export default ClinicResultsPage