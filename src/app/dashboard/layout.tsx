import Drawer from "../../components/drawer"
import NavBar from "../../components/navbar"

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar>
        <Drawer></Drawer>
        </NavBar>
        {children}
      </section>
    )
  }