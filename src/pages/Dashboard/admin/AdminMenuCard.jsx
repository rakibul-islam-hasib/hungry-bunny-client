import React, { useEffect, useState } from 'react';
import SingleAdminMenu from '../RestaurantAdmin/AdminMenu/SingleAdminMenu';

const AdminMenuCard = () => {
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
        <div className="grid gap-4 lg:grid-cols-3 mt-10">
        {menus.map((menu) => (
          <SingleAdminMenu key={menu.id} menu={menu} />
        ))}
      </div>
    );
};

export default AdminMenuCard;