import AnalyticsDashboard from '~/Home-component/AnalyticsDashboard'
import AnalyticsChart from '~/Home-component/AnalyticsChart'
import Gridbox from '~/Home-component/gridbox'

export default function _index() {
  return (
    <div>
{/* <Navbar/> */}
<Gridbox/>
<AnalyticsDashboard/>
<AnalyticsChart/>

    </div>
  )
}
