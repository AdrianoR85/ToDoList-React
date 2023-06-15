import AppContent from "../../components/Content"
import Form from "../../components/Form"
import RowList from "../../components/RowList"

import './main.css'

export default function Main() {
  return (
    <div className="main">
      <AppContent>
        <Form/>
        <RowList />
      </AppContent>
    </div>
  )
}