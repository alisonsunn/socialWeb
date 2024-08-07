// export function createSideBar(sidebarInfo) {
//   const sidebar = document.createElement('div');
//   sidebar.className = "sidebar";

//   sidebarInfo.forEach(item => {
//     const itemInfo = createSideBarItem(item);
//     sidebar.appendChild(itemInfo);
//   });

//   return sidebar;
// }

// export function createSideBarItem(item) {
//   const items = document.createElement('a');
//   items.className = "menu-item";
//   const info = item.icon_class_list.join(" ");
//   const name = item.name;
//   items.innerHTML = `
//   <span>
//     <i class="${info}"></i>
//   </span>
//     <h2>${name}</h2>
//   `
//   return items;
// }

export class Sidebar {
  sidebarInfo = null;

  constructor(sidebarInfo) {
    this.sidebarInfo = sidebarInfo;
  }

  createSideBar = () => {
    const sidebar = document.createElement('div');
    sidebar.className = "sidebar";

    this.sidebarInfo.forEach(item => {
      const itemInfo = new SidebarItem(item).createSideBarItem();
      sidebar.appendChild(itemInfo);
    });

    return sidebar;
  }
}

class SidebarItem {
  item = null;
  constructor(item) {
    this.item = item;
  }

  createSideBarItem = () => {
    const items = document.createElement('a');
    items.className = "menu-item";
    const info = this.item.icon_class_list.join(" ");
    const name = this.item.name;
    items.innerHTML = `
      <span>
        <i class="${info}"></i>
      </span>
        <h2>${name}</h2>
      `
    return items;
  }
}

