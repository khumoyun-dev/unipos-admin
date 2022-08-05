import "./Tabs.scss";

const Tabs = ({ heading, data }) => {
  const changeTab = (evt) => {
    let tabHeaders = document.querySelectorAll(
      `.tabs-item-button[data-tabs=${heading}]`
    );
    for (let i = 0; i < data.length; i++) {
      let tabContent = document.getElementById(`${heading}-${data[i].tabName}`);
      if (`${heading}-${data[i].tabName}` !== evt.target.dataset.tab) {
        tabContent.style.display = "none";
      } else {
        tabContent.style.display = "block";
      }
    }
    for (let i = 0; i < tabHeaders.length; i++) {
      tabHeaders[i].parentNode.classList.remove("tabs-item--active");
    }

    evt.target.parentNode.classList.add("tabs-item--active");
  };

  return (
    <ul className="tabs">
      {data.map((tab, tabIndex) => (
        <li
          key={`${heading}__${tab.tabName}__${tabIndex}`}
          className={`tabs-item${tab.isActive ? " tabs-item--active" : ""}`}
        >
          <button
            className="tabs-item-button"
            type="button"
            data-tabs={`${heading}`}
            data-tab={`${heading}-${tab.tabName}`}
            onClick={changeTab}
          >
            {tab.name}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
