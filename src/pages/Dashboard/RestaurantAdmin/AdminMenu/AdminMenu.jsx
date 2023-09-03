import React, { useEffect, useState } from "react";
import { setLoading } from "../../../../redux/slices/authSlice";
import SingleAdminMenu from "./SingleAdminMenu";

const AdminMenu = () => {
  const [menus, setMenu] = useState([]);
  const [loading, setLoading] = useState([true]);
  useEffect(() => {
    fetch("/foods.json")
      .then((res) => res.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);
  return (
    <div className="grid gap-4 grid-cols-3 mt-10">
      {menus.map((menu) => (
        <SingleAdminMenu key={menu.id} menu={menu} />
      ))}
    </div>
  );
};

export default AdminMenu;
