import React, { useState } from "react";
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import Teams from './Teams';
import Players from './Players';

export default function Tabs() {
  const [input, setInput] = useState("");
  const [activeTab, setActiveTab] = useState("1");

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <>
      <Nav tabs>
        <NavItemToggle title="Teams" onClick={() => toggle("1")} />
        <NavItemToggle title="Players" onClick={() => toggle("2")} />
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Teams input={input} setInput={setInput} />
        </TabPane>
        <TabPane tabId="2">
          <Players input={input} setInput={setInput} />
        </TabPane>
      </TabContent>
    </>
  );
}

function NavItemToggle({ title, onClick }) {
  return (
    <NavItem>
      <NavLink onClick={onClick}>{title}</NavLink>
    </NavItem>
  );
}
