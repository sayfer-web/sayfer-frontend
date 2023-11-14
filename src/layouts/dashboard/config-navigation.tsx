import { useMemo } from 'react';
// routes
import { paths } from 'src/routes/paths';
// locales
import { useLocales } from 'src/locales';
// components
import Label from 'src/components/label';
import Iconify from 'src/components/iconify';
import SvgColor from 'src/components/svg-color';
import { useAuth } from 'src/hooks/use-auth';

// ----------------------------------------------------------------------

const icon = (name: string) => (
  <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />
  // OR
  // <Iconify icon="fluent:mail-24-filled" />
  // https://icon-sets.iconify.design/solar/
  // https://www.streamlinehq.com/icons
);

const ICONS = {
  job: icon('ic_job'),
  blog: icon('ic_blog'),
  chat: icon('ic_chat'),
  mail: icon('ic_mail'),
  user: icon('ic_user'),
  file: icon('ic_file'),
  lock: icon('ic_lock'),
  tour: icon('ic_tour'),
  order: icon('ic_order'),
  label: icon('ic_label'),
  blank: icon('ic_blank'),
  kanban: icon('ic_kanban'),
  folder: icon('ic_folder'),
  banking: icon('ic_banking'),
  booking: icon('ic_booking'),
  invoice: icon('ic_invoice'),
  product: icon('ic_product'),
  calendar: icon('ic_calendar'),
  disabled: icon('ic_disabled'),
  external: icon('ic_external'),
  menuItem: icon('ic_menu_item'),
  ecommerce: icon('ic_ecommerce'),
  analytics: icon('ic_analytics'),
  dashboard: icon('ic_dashboard'),
};

// ----------------------------------------------------------------------

export function useNavData() {
  const { t } = useLocales();

  // const { username, status } = useAuth()

  let username = 'Sayfer'
  let status = 'User'

  const data = useMemo(
    () => [
      // OVERVIEW
      // ----------------------------------------------------------------------
      {
        subheader: t('overview'),
        items: [
          {
            title: t('app'),
            path: paths.dashboard.root,
            icon: ICONS.dashboard,
          },
          // {
          //   title: t('ecommerce'),
          //   path: paths.dashboard.general.ecommerce,
          //   icon: ICONS.ecommerce,
          // },
          // {
          //   title: t('file'),
          //   path: paths.dashboard.general.file,
          //   icon: ICONS.file,
          // },

          {
            title: t('news'),
            path: paths.dashboard.post.root,
            icon: ICONS.blog,
          },

        
          // {
          //   title: t('Address book'),
          //   path: paths.dashboard.general.addressbook,
          //   icon: ICONS.file,
          // },


        ],
      },

      // MANAGEMENT
      // ----------------------------------------------------------------------
      {
        subheader: t('management'),
        items: [
          // USER
          

          {
            title: t('wallet'),
            path: paths.dashboard.general.wallet,
            icon: ICONS.banking,
          },
          
          // TOUR
          {
            title: t('transactions'),
            path: paths.dashboard.transactions.root,
            icon: ICONS.tour,
            children: [
              { title: t('all_transactions'), path: paths.dashboard.transactions.root },
              { title: t('my_transactions'), path: paths.dashboard.transactions.demo.userTransactions },
              // { title: t('details'), path: paths.dashboard.transactions.demo.details },
              // { title: t('create'), path: paths.dashboard.transactions.new },
              // { title: t('edit'), path: paths.dashboard.transactions.demo.edit },
            ],
          },

          {
            title: t('user'),
            path: paths.dashboard.user.root,
            icon: ICONS.user,
            children: [
              
              { title: t('profile'), path: paths.dashboard.user.root },
              // { title: t('cards'), path: paths.dashboard.user.cards },
              // { title: t('create'), path: paths.dashboard.user.new },
              // { title: t('edit'), path: paths.dashboard.user.demo.edit },
              { title: t('account'), path: paths.dashboard.user.account },
              // { title: t('my transactions'), path: paths.dashboard.user.demo.transactions },
              { title: t('all_users'), path: paths.dashboard.user.list },
            ],
          },


          // PRODUCT
          // {
          //   title: t('product'),
          //   path: paths.dashboard.product.root,
          //   icon: ICONS.product,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.product.root },
          //     {
          //       title: t('details'),
          //       path: paths.dashboard.product.demo.details,
          //     },
          //     { title: t('create'), path: paths.dashboard.product.new },
          //     { title: t('edit'), path: paths.dashboard.product.demo.edit },
          //   ],
          // },

          // ORDER
          // {
          //   title: t('order'),
          //   path: paths.dashboard.order.root,
          //   icon: ICONS.order,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.order.root },
          //     { title: t('details'), path: paths.dashboard.order.demo.details },
          //   ],
          // },

          // INVOICE
          // {
          //   title: t('invoice'),
          //   path: paths.dashboard.invoice.root,
          //   icon: ICONS.invoice,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.invoice.root },
          //     {
          //       title: t('details'),
          //       path: paths.dashboard.invoice.demo.details,
          //     },
          //     { title: t('create'), path: paths.dashboard.invoice.new },
          //     { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
          //   ],
          // },

          // BLOG
          // {
          //   title: t('blog'),
          //   path: paths.dashboard.post.root,
          //   icon: ICONS.blog,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.post.root },
          //     { title: t('details'), path: paths.dashboard.post.demo.details },
          //     { title: t('create'), path: paths.dashboard.post.new },
          //     { title: t('edit'), path: paths.dashboard.post.demo.edit },
          //   ],
          // },

          // JOB
          // {
          //   title: t('quests'),
          //   path: paths.dashboard.job.root,
          //   icon: ICONS.job,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.job.root },
          //     { title: t('details'), path: paths.dashboard.job.demo.details },
          //     { title: t('create'), path: paths.dashboard.job.new },
          //     { title: t('edit'), path: paths.dashboard.job.demo.edit },
          //   ],
          // },

          // TOUR
          // {
          //   title: t('tour'),
          //   path: paths.dashboard.tour.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.tour.root },
          //     { title: t('details'), path: paths.dashboard.tour.demo.details },
          //     { title: t('create'), path: paths.dashboard.tour.new },
          //     { title: t('edit'), path: paths.dashboard.tour.demo.edit },
          //   ],
          // },

          // TOUR
          // {
          //   title: t('games'),
          //   path: paths.dashboard.games.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.games.root },
          //     { title: t('details'), path: paths.dashboard.games.demo.details },
          //     { title: t('create'), path: paths.dashboard.games.new },
          //     { title: t('edit'), path: paths.dashboard.games.demo.edit },
          //   ],
          // },

          // FILE MANAGER
          // {
          //   title: t('file_manager'),
          //   path: paths.dashboard.fileManager,
          //   icon: ICONS.folder,
          // },

          // MAIL
          {
            title: t('mail'),
            path: paths.dashboard.mail,
            icon: ICONS.mail,
            info: <Label color="error">+32</Label>,
          },

          // CHAT
          // {
          //   title: t('chat'),
          //   path: paths.dashboard.chat,
          //   icon: ICONS.chat,
          // },

          // CALENDAR
          // {
          //   title: t('calendar'),
          //   path: paths.dashboard.calendar,
          //   icon: ICONS.calendar,
          // },

          // KANBAN
          // {
          //   title: t('roadmap'),
          //   path: paths.dashboard.kanban,
          //   icon: ICONS.kanban,
          // },
        ],
      },

      {
        subheader: t('activity'),
        items: [

          
          {
            title: t('game_room'),
            path: paths.dashboard.general.games,
            icon: ICONS.file,
          },
                    
          {
            title: t('quests'),
            path: paths.dashboard.job.root,
            icon: ICONS.job,
          },
          // USER
          // {
          //   title: t('user'),
          //   path: paths.dashboard.user.root,
          //   icon: ICONS.user,
          //   children: [
          //     { title: t('all_users'), path: paths.dashboard.user.list },
          //     { title: t('profile'), path: paths.dashboard.user.root },
          //     // { title: t('cards'), path: paths.dashboard.user.cards },
          //     // { title: t('create'), path: paths.dashboard.user.new },
          //     // { title: t('edit'), path: paths.dashboard.user.demo.edit },
          //     { title: t('account'), path: paths.dashboard.user.account },
          //     // { title: t('my transactions'), path: paths.dashboard.user.demo.transactions },
          //   ],
          // },
          
          // TOUR
          // {
          //   title: t('transactions'),
          //   path: paths.dashboard.transactions.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: t('all_transactions'), path: paths.dashboard.transactions.root },
          //     { title: t('my_transactions'), path: paths.dashboard.transactions.demo.userTransactions },
          //     // { title: t('details'), path: paths.dashboard.transactions.demo.details },
          //     // { title: t('create'), path: paths.dashboard.transactions.new },
          //     // { title: t('edit'), path: paths.dashboard.transactions.demo.edit },
          //   ],
          // },


          // PRODUCT
          // {
          //   title: t('product'),
          //   path: paths.dashboard.product.root,
          //   icon: ICONS.product,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.product.root },
          //     {
          //       title: t('details'),
          //       path: paths.dashboard.product.demo.details,
          //     },
          //     { title: t('create'), path: paths.dashboard.product.new },
          //     { title: t('edit'), path: paths.dashboard.product.demo.edit },
          //   ],
          // },

          // ORDER
          // {
          //   title: t('order'),
          //   path: paths.dashboard.order.root,
          //   icon: ICONS.order,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.order.root },
          //     { title: t('details'), path: paths.dashboard.order.demo.details },
          //   ],
          // },

          // INVOICE
          // {
          //   title: t('invoice'),
          //   path: paths.dashboard.invoice.root,
          //   icon: ICONS.invoice,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.invoice.root },
          //     {
          //       title: t('details'),
          //       path: paths.dashboard.invoice.demo.details,
          //     },
          //     { title: t('create'), path: paths.dashboard.invoice.new },
          //     { title: t('edit'), path: paths.dashboard.invoice.demo.edit },
          //   ],
          // },

          // BLOG
          // {
          //   title: t('blog'),
          //   path: paths.dashboard.post.root,
          //   icon: ICONS.blog,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.post.root },
          //     { title: t('details'), path: paths.dashboard.post.demo.details },
          //     { title: t('create'), path: paths.dashboard.post.new },
          //     { title: t('edit'), path: paths.dashboard.post.demo.edit },
          //   ],
          // },

          // JOB
          // {
          //   title: t('quests'),
          //   path: paths.dashboard.job.root,
          //   icon: ICONS.job,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.job.root },
          //     { title: t('details'), path: paths.dashboard.job.demo.details },
          //     { title: t('create'), path: paths.dashboard.job.new },
          //     { title: t('edit'), path: paths.dashboard.job.demo.edit },
          //   ],
          // },

          // TOUR
          // {
          //   title: t('tour'),
          //   path: paths.dashboard.tour.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.tour.root },
          //     { title: t('details'), path: paths.dashboard.tour.demo.details },
          //     { title: t('create'), path: paths.dashboard.tour.new },
          //     { title: t('edit'), path: paths.dashboard.tour.demo.edit },
          //   ],
          // },

          // TOUR
          // {
          //   title: t('games'),
          //   path: paths.dashboard.games.root,
          //   icon: ICONS.tour,
          //   children: [
          //     { title: t('list'), path: paths.dashboard.games.root },
          //     { title: t('details'), path: paths.dashboard.games.demo.details },
          //     { title: t('create'), path: paths.dashboard.games.new },
          //     { title: t('edit'), path: paths.dashboard.games.demo.edit },
          //   ],
          // },

          // FILE MANAGER
          // {
          //   title: t('file_manager'),
          //   path: paths.dashboard.fileManager,
          //   icon: ICONS.folder,
          // },

          // MAIL
          // {
          //   title: t('mail'),
          //   path: paths.dashboard.mail,
          //   icon: ICONS.mail,
          //   info: <Label color="error">+32</Label>,
          // },

          // CHAT
          {
            title: t('chat'),
            path: paths.dashboard.chat,
            icon: ICONS.chat,
          },

          // CALENDAR
          // {
          //   title: t('calendar'),
          //   path: paths.dashboard.calendar,
          //   icon: ICONS.calendar,
          // },

          // KANBAN
          {
            title: t('roadmap'),
            path: paths.dashboard.kanban,
            icon: ICONS.kanban,
          },
        ],
      },
      {
        subheader: t('menu_ap'),
        items: [
          // USER
          // {
          //   title: t('user'),
          //   path: paths.dashboard.user.root,
          //   icon: ICONS.user,
          //   children: [
          //     { title: t('all_users'), path: paths.dashboard.user.list },
          //     { title: t('profile'), path: paths.dashboard.user.root },
          //     // { title: t('cards'), path: paths.dashboard.user.cards },
          //     // { title: t('create'), path: paths.dashboard.user.new },
          //     // { title: t('edit'), path: paths.dashboard.user.demo.edit },
          //     { title: t('account'), path: paths.dashboard.user.account },
          //     // { title: t('my transactions'), path: paths.dashboard.user.demo.transactions },
          //   ],
          // },
          {
            title: t('analytics'),
            path: paths.dashboard.general.analytics,
            icon: ICONS.analytics,
          },
          {
            title: t('booking'),
            path: paths.dashboard.general.booking,
            icon: ICONS.booking,
          },
        ]
      },

      // DEMO MENU STATES
      // {
      //   subheader: t(t('other_cases')),
      //   items: [
      //     {
      //       // default roles : All roles can see this entry.
      //       // roles: ['user'] Only users can see this item.
      //       // roles: ['admin'] Only admin can see this item.
      //       // roles: ['admin', 'manager'] Only admin/manager can see this item.
      //       // Reference from 'src/guards/RoleBasedGuard'.
      //       title: t('item_by_roles'),
      //       path: paths.dashboard.permission,
      //       icon: ICONS.lock,
      //       roles: ['admin', 'manager'],
      //       caption: t('only_admin_can_see_this_item'),
      //     },
      //     {
      //       title: t('menu_level'),
      //       path: '#/dashboard/menu_level',
      //       icon: ICONS.menuItem,
      //       children: [
      //         {
      //           title: t('menu_level_1a'),
      //           path: '#/dashboard/menu_level/menu_level_1a',
      //         },
      //         {
      //           title: t('menu_level_1b'),
      //           path: '#/dashboard/menu_level/menu_level_1b',
      //           children: [
      //             {
      //               title: t('menu_level_2a'),
      //               path: '#/dashboard/menu_level/menu_level_1b/menu_level_2a',
      //             },
      //             {
      //               title: t('menu_level_2b'),
      //               path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b',
      //               children: [
      //                 {
      //                   title: t('menu_level_3a'),
      //                   path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3a',
      //                 },
      //                 {
      //                   title: t('menu_level_3b'),
      //                   path: '#/dashboard/menu_level/menu_level_1b/menu_level_2b/menu_level_3b',
      //                 },
      //               ],
      //             },
      //           ],
      //         },
      //       ],
      //     },
      //     {
      //       title: t('item_disabled'),
      //       path: '#disabled',
      //       icon: ICONS.disabled,
      //       disabled: true,
      //     },
      //     {
      //       title: t('item_label'),
      //       path: '#label',
      //       icon: ICONS.label,
      //       info: (
      //         <Label color="info" startIcon={<Iconify icon="solar:bell-bing-bold-duotone" />}>
      //           NEW
      //         </Label>
      //       ),
      //     },
      //     {
      //       title: t('item_caption'),
      //       path: '#caption',
      //       icon: ICONS.menuItem,
      //       caption:
      //         'Quisque malesuada placerat nisl. In hac habitasse platea dictumst. Cras id dui. Pellentesque commodo eros a enim. Morbi mollis tellus ac sapien.',
      //     },
      //     {
      //       title: t('item_external_link'),
      //       path: 'https://www.google.com/',
      //       icon: ICONS.external,
      //     },
      //     {
      //       title: t('blank'),
      //       path: paths.dashboard.blank,
      //       icon: ICONS.blank,
      //     },
      //   ],
      // },
    ],
    [t]
  );

  return status === 'Admin' ? data : data.filter(item => item.subheader !== t('menu_ap'))
}
