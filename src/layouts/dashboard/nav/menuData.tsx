import { Iconify } from "@/components/icon";

const useMenuData = () => {
  return [
    {
      key: "/dashboard",
      label: "仪表",
      icon: (
        <Iconify
          icon="solar:pie-chart-2-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "/dashboard/app",
          label: "应用程序",
        },
        {
          key: "/dashboard/ecommerce",
          label: "电子商务",
        },
        {
          key: "/dashboard/analytics",
          label: "分析页",
        },
        {
          key: "/dashboard/banking",
          label: "财务流水",
        },
        {
          key: "/dashboard/booking",
          label: "预定分析",
        },
        {
          key: "/dashboard/file",
          label: "文件概览",
        },
        {
          key: "/dashboard/course",
          label: "课程",
        },
      ],
    },
    {
      key: "2",
      label: "管理",
      icon: (
        <Iconify
          icon="solar:folder-with-files-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "2-1",
          label: "用户",
          type: "group",
          children: [
            {
              key: "2-1-1",
              label: "个人中心",
            },
            {
              key: "2-1-2",
              label: "账户设置",
            },
          ],
        },
        {
          key: "2-2",
          label: "系统",
          type: "group",
          children: [
            {
              key: "2-2-1",
              label: "用户管理",
            },
            {
              key: "2-2-2",
              label: "角色管理",
            },
            {
              key: "2-2-3",
              label: "权限管理",
            },
          ],
        },
      ],
    },
    {
      key: "3",
      label: "异常页",
      icon: (
        <Iconify
          icon="solar:shield-warning-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "3-1",
          label: "403",
        },
        {
          key: "3-2",
          label: "404",
        },
        {
          key: "3-3",
          label: "500",
        },
      ],
    },
    {
      key: "4",
      label: "多级菜单",
      icon: (
        <Iconify
          icon="solar:hamburger-menu-bold-duotone"
          size={24}
          style={{ color: "rgb(99, 115, 129)" }}
        />
      ),
      children: [
        {
          key: "4-1",
          label: "403",
        },
        {
          key: "4-2",
          label: "404",
        },
        {
          key: "4-3",
          label: "500",
        },
        {
          key: "4-4",
          label: "501",
        },
        {
          key: "4-5",
          label: "502",
        },
      ],
    },
  ];
};

export default useMenuData;
