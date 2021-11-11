# shopex485 文件树/Tree

```
D:\WAMP\WWW\SHOPEX
│  api.php
│  error.html            错误文件
│  favicon.ico           ico
│  index.php             首页入口
│  install.txt
│  passport_client.php
│  robots.txt
│  root.htaccess
│  version.txt
│  web.config.sample
│
├─api
│      helper.php
│      uc.php
│
├─config     配置文件
│      config.php            基本配置文件
│      config.sample.php
│      install.lock          安装识别
│
├─core       核心文件
│  │  func_ext.php
│  │  kernel.php
│  │  site.xml
│  │  version.txt
│  │
│  ├─admin
│  │  ├─controller
│  │  │  │  ctl.cent_save.php
│  │  │  │  ctl.dashboard.php
│  │  │  │  ctl.default.php
│  │  │  │  ctl.demo.php
│  │  │  │  ctl.editor.php
│  │  │  │  ctl.passport.php
│  │  │  │  ctl.sfile.php
│  │  │  │
│  │  │  ├─admin
│  │  │  │      ctl.operator.php
│  │  │  │      ctl.profile.php
│  │  │  │      ctl.roles.php
│  │  │  │
│  │  │  ├─content
│  │  │  │      ctl.articles.php
│  │  │  │      ctl.content.php
│  │  │  │      ctl.custommessage.php
│  │  │  │      ctl.frendlink.php
│  │  │  │      ctl.menus.php
│  │  │  │      ctl.pages.php
│  │  │  │      ctl.sitemaps.php
│  │  │  │
│  │  │  ├─distribution
│  │  │  │      ctl.autosync.php
│  │  │  │      ctl.supplier.php
│  │  │  │
│  │  │  ├─goods
│  │  │  │      ctl.adjunct.php
│  │  │  │      ctl.brand.php
│  │  │  │      ctl.category.php
│  │  │  │      ctl.discuss.php
│  │  │  │      ctl.gnotify.php
│  │  │  │      ctl.gtype.php
│  │  │  │      ctl.items.php
│  │  │  │      ctl.package.php
│  │  │  │      ctl.product.php
│  │  │  │      ctl.spec.php
│  │  │  │      ctl.specification.php
│  │  │  │      ctl.virtualcat.php
│  │  │  │
│  │  │  ├─member
│  │  │  │      ctl.advance.php
│  │  │  │      ctl.gask.php
│  │  │  │      ctl.level.php
│  │  │  │      ctl.member.php
│  │  │  │      ctl.memberattr.php
│  │  │  │      ctl.messenger.php
│  │  │  │      ctl.messenger0.php
│  │  │  │      ctl.msgbox.php
│  │  │  │      ctl.shopbbs.php
│  │  │  │
│  │  │  ├─order
│  │  │  │      ctl.delivery_centers.php
│  │  │  │      ctl.delivery_printer.php
│  │  │  │      ctl.order.php
│  │  │  │      ctl.payment.php
│  │  │  │      ctl.po.php
│  │  │  │      ctl.printer_center.php
│  │  │  │      ctl.refund.php
│  │  │  │      ctl.reship.php
│  │  │  │      ctl.return_product.php
│  │  │  │      ctl.shipping.php
│  │  │  │
│  │  │  ├─sale
│  │  │  │      ctl.activity.php
│  │  │  │      ctl.coupon.php
│  │  │  │      ctl.couponGenerate.php
│  │  │  │      ctl.exchangeCoupon.php
│  │  │  │      ctl.gift.php
│  │  │  │      ctl.giftcat.php
│  │  │  │      ctl.point.php
│  │  │  │      ctl.promotion.php
│  │  │  │      ctl.salescount.php
│  │  │  │      ctl.tools.php
│  │  │  │
│  │  │  ├─service
│  │  │  │      ctl.certificate.php
│  │  │  │      ctl.demo_data.php
│  │  │  │      ctl.domainbind.php
│  │  │  │      ctl.download.php
│  │  │  │      ctl.kft.php
│  │  │  │      ctl.wss.php
│  │  │  │
│  │  │  ├─system
│  │  │  │      ctl.about.php
│  │  │  │      ctl.addon.php
│  │  │  │      ctl.appmgr.php
│  │  │  │      ctl.backup.php
│  │  │  │      ctl.comeback.php
│  │  │  │      ctl.cur.php
│  │  │  │      ctl.debug.php
│  │  │  │      ctl.location.php
│  │  │  │      ctl.magicvars.php
│  │  │  │      ctl.passport.php
│  │  │  │      ctl.setting.php
│  │  │  │      ctl.sfile.php
│  │  │  │      ctl.template.php
│  │  │  │      ctl.tmpimage.php
│  │  │  │      ctl.tools.php
│  │  │  │      ctl.trigger.php
│  │  │  │
│  │  │  └─trading
│  │  │          ctl.delivery.php
│  │  │          ctl.deliveryarea.php
│  │  │          ctl.deliverycorp.php
│  │  │          ctl.payment.php
│  │  │
│  │  ├─locale
│  │  ├─smartyplugin
│  │  │      block.area.php
│  │  │      block.help.php
│  │  │      block.role.php
│  │  │      block.tab.php
│  │  │      block.tabber.php
│  │  │      compiler.button.php
│  │  │      compiler.finder.php
│  │  │      compiler.finder_lister.php
│  │  │      compiler.img.php
│  │  │      function.filter.php
│  │  │      function.finder.php
│  │  │      function.json.php
│  │  │      function.pager.php
│  │  │      function.refer.php
│  │  │      function.setting.php
│  │  │      function.tag.php
│  │  │      function.template_filter.php
│  │  │      function.toinput.php
│  │  │      function.uploader.php
│  │  │      input.object.php
│  │  │      modifier.b2bcur.php
│  │  │      modifier.barcode.php
│  │  │      modifier.region.php
│  │  │      modifier.size.php
│  │  │
│  │  └─view
│  │      │  appTaobaoIntro.html
│  │      │  blank.html
│  │      │  dashboard.html
│  │      │  helper.html
│  │      │  index.html
│  │      │  login.html
│  │      │  menuSearch.html
│  │      │  page.html
│  │      │  paymentpage.html
│  │      │  print.html
│  │      │  regionSelect.html
│  │      │  reglic.html
│  │      │  sidemenu.html
│  │      │  singlepage.html
│  │      │  status.html
│  │      │  treeNode.html
│  │      │
│  │      ├─admin
│  │      │      finder_action.html
│  │      │      finder_command.html
│  │      │      finder_filter.html
│  │      │      op_detail.html
│  │      │      op_edit.html
│  │      │      op_login.html
│  │      │      roles_action.html
│  │      │      roles_cmd.html
│  │      │      roles_item.html
│  │      │      self.html
│  │      │
│  │      ├─content
│  │      │  │  custompage.html
│  │      │  │  definedDetail.html
│  │      │  │  editHtml.html
│  │      │  │  frameset.html
│  │      │  │  goodscat.html
│  │      │  │  layout.html
│  │      │  │  menus.html
│  │      │  │  menusDetail.html
│  │      │  │  menusDetailAdd.html
│  │      │  │  menusDetailEdit.html
│  │      │  │  newnode.html
│  │      │  │  node_info.html
│  │      │  │  page.html
│  │      │  │  page_edit.html
│  │      │  │  page_frame.html
│  │      │  │  page_url.html
│  │      │  │  sitemap.html
│  │      │  │  type_edit.html
│  │      │  │  type_list.html
│  │      │  │  type_new.html
│  │      │  │  welcome.html
│  │      │  │
│  │      │  ├─article
│  │      │  │      article.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      getgoods.html
│  │      │  │      preview.html
│  │      │  │
│  │      │  ├─custommessage
│  │      │  │      edit.html
│  │      │  │      finder_command.html
│  │      │  │
│  │      │  ├─frendlink
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │
│  │      │  └─widgets
│  │      │          htmlbox.html
│  │      │          info.html
│  │      │          list.html
│  │      │          widgetsCenter.html
│  │      │          widgetsDetailRight.html
│  │      │          widgetsLeftDetail.html
│  │      │
│  │      ├─delivery
│  │      │      area_edit.html
│  │      │      area_finder_action.html
│  │      │      area_list.html
│  │      │      area_map.html
│  │      │      area_new.html
│  │      │      area_sub_treeList.html
│  │      │      area_treeList.html
│  │      │      check_exp.html
│  │      │      command.html
│  │      │      corp_edit.html
│  │      │      corp_finder_action.html
│  │      │      corp_list.html
│  │      │      corp_new.html
│  │      │      dtype_edit.html
│  │      │      finder_action.html
│  │      │      finder_command.html
│  │      │      help_mantes.html
│  │      │      help_rate.html
│  │      │
│  │      ├─distribution
│  │      │  │  autosync_edit.html
│  │      │  │  autosync_local_op_row.html
│  │      │  │  autosync_pline_list.html
│  │      │  │  autosync_rule_row.html
│  │      │  │  auto_command.html
│  │      │  │  auto_finder_action.html
│  │      │  │  data_sync.html
│  │      │  │  data_sync_list.html
│  │      │  │  generalize.html
│  │      │  │  index.html
│  │      │  │  product_line.html
│  │      │  │  supplier_list.html
│  │      │  │  sync_complete.html
│  │      │  │
│  │      │  └─goods
│  │      │          goods_info.html
│  │      │          goods_type_info.html
│  │      │
│  │      ├─editor
│  │      │      body.html
│  │      │      dlg_flash.html
│  │      │      dlg_image.html
│  │      │      dlg_lnk.html
│  │      │      dlg_mce.html
│  │      │      dlg_result.html
│  │      │      dlg_table.html
│  │      │      gallery_img.html
│  │      │      gallery_swf.html
│  │      │      object_items.html
│  │      │      object_selector.html
│  │      │      style_1.html
│  │      │      style_2.html
│  │      │      the_filter.html
│  │      │
│  │      ├─finder
│  │      │      browser.html
│  │      │      cell_editor.html
│  │      │      col_setting.html
│  │      │      common.html
│  │      │      compact.html
│  │      │      detail-in-one.html
│  │      │      detail.html
│  │      │      detail_title.html
│  │      │      export.html
│  │      │      filter.html
│  │      │      filter_show.html
│  │      │      finder-tag.html
│  │      │      import.html
│  │      │      input-row.html
│  │      │      input.html
│  │      │      list-error.html
│  │      │      list.html
│  │      │      lister.html
│  │      │      pvfilter.html
│  │      │      recycleCommon.html
│  │      │      recycleCompact.html
│  │      │      result.html
│  │      │      rowonly.html
│  │      │      rows.html
│  │      │
│  │      ├─member
│  │      │  │  advancelist.html
│  │      │  │  advance_finder_action.html
│  │      │  │  advance_list.html
│  │      │  │  batch_edit.html
│  │      │  │  finder_action.html
│  │      │  │  finder_command.html
│  │      │  │  finder_filter.html
│  │      │  │  member_edit.html
│  │      │  │  member_items.html
│  │      │  │  member_new.html
│  │      │  │  member_ordertab.html
│  │      │  │  modify_experience.html
│  │      │  │  modify_point.html
│  │      │  │  remark.html
│  │      │  │  remark_row.html
│  │      │  │  review_info.html
│  │      │  │  sub_discuss.html
│  │      │  │  sub_edit.html
│  │      │  │  sub_ext_info.html
│  │      │  │  sub_message.html
│  │      │  │  sub_orders.html
│  │      │  │  sub_password.html
│  │      │  │  sub_point_history.html
│  │      │  │  sub_review.html
│  │      │  │
│  │      │  ├─attr
│  │      │  │      attr_edit.html
│  │      │  │      attr_new.html
│  │      │  │      map.html
│  │      │  │
│  │      │  ├─gask
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      setting.html
│  │      │  │
│  │      │  ├─level
│  │      │  │      finder_action.html
│  │      │  │      level_edit.html
│  │      │  │      level_new.html
│  │      │  │
│  │      │  ├─msgbox
│  │      │  │      msg_command.html
│  │      │  │      msg_html_items.html
│  │      │  │      msg_items.html
│  │      │  │      msg_update_revert.html
│  │      │  │
│  │      │  └─shopbbs
│  │      │          msg_html_items.html
│  │      │          msg_items.html
│  │      │          msg_update_revert.html
│  │      │          setting.html
│  │      │
│  │      ├─messenger
│  │      │      config.html
│  │      │      edtmpl.html
│  │      │      index.html
│  │      │      outbox.html
│  │      │      page.html
│  │      │      queue.html
│  │      │      testemail.html
│  │      │      write.html
│  │      │
│  │      ├─order
│  │      │  │  actbar.html
│  │      │  │  detail_title.html
│  │      │  │  dly_center.html
│  │      │  │  dly_center_action.html
│  │      │  │  dly_center_command.html
│  │      │  │  dly_center_editor.html
│  │      │  │  dly_printer_action.html
│  │      │  │  dly_printer_command.html
│  │      │  │  dly_printer_editor.html
│  │      │  │  dly_printer_import.html
│  │      │  │  dly_printer_uploadbg.html
│  │      │  │  edit_items.html
│  │      │  │  edit_local_items.html
│  │      │  │  edit_po.html
│  │      │  │  finder_action.html
│  │      │  │  finder_command.html
│  │      │  │  finder_filter.html
│  │      │  │  index.html
│  │      │  │  make_po.html
│  │      │  │  new_items.html
│  │      │  │  new_pkgitems.html
│  │      │  │  od_bill.html
│  │      │  │  od_delivery.html
│  │      │  │  od_items.html
│  │      │  │  od_logs.html
│  │      │  │  od_mark.html
│  │      │  │  od_msg.html
│  │      │  │  od_pmts.html
│  │      │  │  orderconsign.html
│  │      │  │  orderpayed.html
│  │      │  │  orderrefund.html
│  │      │  │  orderreturn.html
│  │      │  │  order_create.html
│  │      │  │  order_detail.html
│  │      │  │  order_edit.html
│  │      │  │  order_flow.html
│  │      │  │  order_info.html
│  │      │  │  order_membertab.html
│  │      │  │  order_new.html
│  │      │  │  order_prom.html
│  │      │  │  order_remark.html
│  │      │  │  page.html
│  │      │  │  po_delivery.html
│  │      │  │  po_detail.html
│  │      │  │  po_items.html
│  │      │  │  po_items_local.html
│  │      │  │  po_items_supplier.html
│  │      │  │  po_pay.html
│  │      │  │  print.html
│  │      │  │  printertest.html
│  │      │  │  printstyle.html
│  │      │  │  print_cart.html
│  │      │  │  print_dly.html
│  │      │  │  print_dly_job.html
│  │      │  │  print_sheet.html
│  │      │  │  show_order_msg.html
│  │      │  │
│  │      │  ├─payment
│  │      │  │      detail.html
│  │      │  │      finder_filter.html
│  │      │  │
│  │      │  ├─refund
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │
│  │      │  ├─reship
│  │      │  │      detail.html
│  │      │  │
│  │      │  ├─return_product
│  │      │  │      detail.html
│  │      │  │      filter.html
│  │      │  │      return_status.html
│  │      │  │
│  │      │  └─shipping
│  │      │          detail.html
│  │      │
│  │      ├─passport
│  │      │      passport_edit.html
│  │      │      passport_list.html
│  │      │      passport_ucenter.html
│  │      │
│  │      ├─payment
│  │      │      finder_action.html
│  │      │      finder_command.html
│  │      │      pay_detail.html
│  │      │      pay_edit.html
│  │      │      pay_index.html
│  │      │      pay_index_china.html
│  │      │      pay_index_other.html
│  │      │      pay_list.html
│  │      │      pay_new.html
│  │      │
│  │      ├─po
│  │      │      actbar.html
│  │      │      command.html
│  │      │      detail.html
│  │      │      detail_info.html
│  │      │      detail_money.html
│  │      │      detail_ship.html
│  │      │      detail_title.html
│  │      │      filter.html
│  │      │      order_items.html
│  │      │
│  │      ├─product
│  │      │  │  batchEdit.html
│  │      │  │  batchEditBrand.html
│  │      │  │  batchEditBrief.html
│  │      │  │  batchEditCat.html
│  │      │  │  batchEditDifferencePrice.html
│  │      │  │  batchEditDifferencePriceList.html
│  │      │  │  batchEditDifferenceStore.html
│  │      │  │  batchEditDifferenceStoreList.html
│  │      │  │  batchEditDorder.html
│  │      │  │  batchEditName.html
│  │      │  │  batchEditScore.html
│  │      │  │  batchEditUniformPrice.html
│  │      │  │  batchEditUniformStore.html
│  │      │  │  batchEditWeight.html
│  │      │  │  batchImage.html
│  │      │  │  detail.html
│  │      │  │  filter_addon.html
│  │      │  │  finder_action.html
│  │      │  │  finder_command.html
│  │      │  │  finder_filter.html
│  │      │  │  finder_products_action.html
│  │      │  │  finder_products_filter.html
│  │      │  │  gimage.html
│  │      │  │  gimage_goods.html
│  │      │  │  import.html
│  │      │  │  levelPrice.html
│  │      │  │  list_normal.html
│  │      │  │  nospec.html
│  │      │  │  ratelist.html
│  │      │  │  sel_spec_value.html
│  │      │  │  spec.html
│  │      │  │  spec_addcol.html
│  │      │  │  spec_addspectab.html
│  │      │  │  spec_addspecvalue.html
│  │      │  │  spec_row.html
│  │      │  │  spec_selalbumsimg.html
│  │      │  │  spec_select.html
│  │      │  │  spec_value.html
│  │      │  │  type_turn.html
│  │      │  │  workpage.html
│  │      │  │
│  │      │  ├─adjunct
│  │      │  │      filter.html
│  │      │  │      goods.html
│  │      │  │      info.html
│  │      │  │      row.html
│  │      │  │
│  │      │  ├─brand
│  │      │  │      checkbox_list.html
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │
│  │      │  ├─category
│  │      │  │      info.html
│  │      │  │      map.html
│  │      │  │      view.html
│  │      │  │      view_row.html
│  │      │  │
│  │      │  ├─detail
│  │      │  │      adj.html
│  │      │  │      adv.html
│  │      │  │      basic.html
│  │      │  │      content.html
│  │      │  │      frame.html
│  │      │  │      notify.html
│  │      │  │      page.html
│  │      │  │      params.html
│  │      │  │      rel.html
│  │      │  │      rel_items.html
│  │      │  │      tag.html
│  │      │  │      taskman.html
│  │      │  │      taskrows.html
│  │      │  │      view_gimages.html
│  │      │  │
│  │      │  ├─discuss
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      list.html
│  │      │  │      setting.html
│  │      │  │
│  │      │  ├─gnotify
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │
│  │      │  ├─gtype
│  │      │  │      brand_form.html
│  │      │  │      done.html
│  │      │  │      error.html
│  │      │  │      finder_action.html
│  │      │  │      finder_command.html
│  │      │  │      form.html
│  │      │  │      minfo_form.html
│  │      │  │      name.html
│  │      │  │      newType.html
│  │      │  │      params_form.html
│  │      │  │      props_form.html
│  │      │  │      spec.html
│  │      │  │      spec_form.html
│  │      │  │      workpage.html
│  │      │  │
│  │      │  ├─package
│  │      │  │      addPackage.html
│  │      │  │      command.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      pkg_items.html
│  │      │  │
│  │      │  ├─selllog
│  │      │  │      setting.html
│  │      │  │
│  │      │  ├─spec
│  │      │  │      detail.html
│  │      │  │      finder_action.html
│  │      │  │      finder_command.html
│  │      │  │
│  │      │  └─virtualcat
│  │      │          import.html
│  │      │          info.html
│  │      │          map.html
│  │      │          maptree.html
│  │      │          rows.html
│  │      │
│  │      ├─sale
│  │      │  │  welcome.html
│  │      │  │
│  │      │  ├─activity
│  │      │  │      activityInfo.html
│  │      │  │      command.html
│  │      │  │      completeActivity.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      promotion.html
│  │      │  │
│  │      │  ├─count
│  │      │  │      membercount.html
│  │      │  │      salescount.html
│  │      │  │      salescountall.html
│  │      │  │      salesguide.html
│  │      │  │      visitsalecompare.html
│  │      │  │
│  │      │  ├─coupon
│  │      │  │  │  addExchange.html
│  │      │  │  │  command.html
│  │      │  │  │  couponInfo.html
│  │      │  │  │  finder_action.html
│  │      │  │  │  finder_filter.html
│  │      │  │  │  generator.html
│  │      │  │  │  list.html
│  │      │  │  │  publish.html
│  │      │  │  │  selectProduct.html
│  │      │  │  │  selectPromotionRule.html
│  │      │  │  │  writePromotionRule.html
│  │      │  │  │
│  │      │  │  ├─exchange
│  │      │  │  │      addExchange.html
│  │      │  │  │      finder_action.html
│  │      │  │  │
│  │      │  │  └─generate
│  │      │  │          finder_action.html
│  │      │  │          finder_filter.html
│  │      │  │          list.html
│  │      │  │
│  │      │  ├─gift
│  │      │  │      addGift.html
│  │      │  │      command.html
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │
│  │      │  ├─giftcat
│  │      │  │      addType.html
│  │      │  │      command.html
│  │      │  │      finder_action.html
│  │      │  │      list.html
│  │      │  │
│  │      │  ├─point
│  │      │  │      pointSetting.html
│  │      │  │
│  │      │  ├─promotion
│  │      │  │      finder_action.html
│  │      │  │      finder_filter.html
│  │      │  │      publish.html
│  │      │  │      selectProduct.html
│  │      │  │      selectPromotionRule.html
│  │      │  │      writePromotionRule.html
│  │      │  │
│  │      │  └─wltx
│  │      │          index.html
│  │      │          open.html
│  │      │          wltx_exp.html
│  │      │          wltx_exp_aply.html
│  │      │
│  │      ├─service
│  │      │  │  checkp.html
│  │      │  │  download_complete_handle.html
│  │      │  │  download_progress.html
│  │      │  │  index.html
│  │      │  │  kft.html
│  │      │  │  welcome.html
│  │      │  │  wss.html
│  │      │  │  wssframe.html
│  │      │  │
│  │      │  └─domainbind
│  │      │          add.html
│  │      │          index.html
│  │      │          result.html
│  │      │
│  │      ├─setting
│  │      │      cert.html
│  │      │      green_card.html
│  │      │      im_setting.html
│  │      │      return_product.html
│  │      │      shopping_basic.html
│  │      │      site_basic.html
│  │      │      site_watermark.html
│  │      │      welcome.html
│  │      │
│  │      ├─splash
│  │      │      failed.html
│  │      │      notice.html
│  │      │      success.html
│  │      │
│  │      ├─system
│  │      │  ├─addons
│  │      │  │      finder_action.html
│  │      │  │      page.html
│  │      │  │      plugin-dataio.html
│  │      │  │      plugin-functions.html
│  │      │  │      plugin-messenger.html
│  │      │  │      plugin-passport.html
│  │      │  │      plugin-payment.html
│  │      │  │      plugin-pmtScheme.html
│  │      │  │      plugin-schema.html
│  │      │  │      plugin-shipping.html
│  │      │  │      widgets.html
│  │      │  │
│  │      │  ├─appmgr
│  │      │  │      app_online.html
│  │      │  │      detail.html
│  │      │  │      index.html
│  │      │  │      install.html
│  │      │  │      setting.html
│  │      │  │      uninstall.html
│  │      │  │      update.html
│  │      │  │      view_update_info.html
│  │      │  │
│  │      │  ├─backup
│  │      │  │      backup.html
│  │      │  │
│  │      │  ├─comeback
│  │      │  │      comeback.html
│  │      │  │      tgzFileList.html
│  │      │  │
│  │      │  ├─cur
│  │      │  │      cur.html
│  │      │  │      curDetail.html
│  │      │  │
│  │      │  ├─debug
│  │      │  │      clear.html
│  │      │  │      databasecheck.html
│  │      │  │      debug.html
│  │      │  │
│  │      │  ├─location
│  │      │  │      index.html
│  │      │  │
│  │      │  ├─magicvars
│  │      │  │      finder_action.html
│  │      │  │      finder_command.html
│  │      │  │      var_item.html
│  │      │  │
│  │      │  ├─tags
│  │      │  │      list.html
│  │      │  │
│  │      │  ├─template
│  │      │  │      doAddWidgets.html
│  │      │  │      edit.html
│  │      │  │      editor.html
│  │      │  │      htmEdit.html
│  │      │  │      list.html
│  │      │  │      map.html
│  │      │  │      saveWidgets.html
│  │      │  │      templateEdit.html
│  │      │  │      templateImage.html
│  │      │  │      templateSource.html
│  │      │  │      template_filter.html
│  │      │  │      theme.xml
│  │      │  │      themeupload.html
│  │      │  │      tplresource.html
│  │      │  │      widgetHeader.html
│  │      │  │      widgetsCenter.html
│  │      │  │      widgetsDetailRight.html
│  │      │  │      widgetsLeftDetail.html
│  │      │  │
│  │      │  ├─tools
│  │      │  │      about.html
│  │      │  │      article.html
│  │      │  │      brand.html
│  │      │  │      cachemgr.html
│  │      │  │      createlink.html
│  │      │  │      dbinfo.html
│  │      │  │      errorpage.html
│  │      │  │      float.html
│  │      │  │      footEdit.html
│  │      │  │      goods.html
│  │      │  │      homepage.html
│  │      │  │      list.html
│  │      │  │      searchempty.html
│  │      │  │      selectcsv.html
│  │      │  │      seo.html
│  │      │  │      sitemaps.html
│  │      │  │      svinfo.html
│  │      │  │      uploader.html
│  │      │  │      welcome.html
│  │      │  │
│  │      │  └─trigger
│  │      │          action_row.html
│  │      │          command.html
│  │      │          filter.html
│  │      │          finder_action.html
│  │      │          item.html
│  │      │          normal_trigger.html
│  │      │          system_trigger.html
│  │      │
│  │      └─upgrade
│  │              done.html
│  │              missing.html
│  │              page.html
│  │              ready.html
│  │              uploading.html
│  │
│  ├─api
│  │  │  shop_api.php
│  │  │  shop_api_model_object.php
│  │  │  shop_api_object.php
│  │  │
│  │  ├─gimage
│  │  │  ├─1.0
│  │  │  │      api_b2b_1_0_gimage.php
│  │  │  │
│  │  │  └─application_error
│  │  │          gimage_application_error.php
│  │  │
│  │  ├─goods
│  │  │  ├─1.0
│  │  │  │      api_1_0_goods.php
│  │  │  │      api_b2b_1_0_goods.php
│  │  │  │
│  │  │  ├─1.1
│  │  │  │      api_b2b_1_1_goods.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_goods.php
│  │  │  │
│  │  │  ├─3.0
│  │  │  │      api_b2b_3_0_goods.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_goods_application_error.php
│  │  │          goods_application_error.php
│  │  │
│  │  ├─include
│  │  │      api_error_handle.php
│  │  │      api_link.php
│  │  │      api_utility.php
│  │  │
│  │  ├─member
│  │  │  ├─1.0
│  │  │  │      api_b2b_1_0_advance.php
│  │  │  │      api_b2b_1_0_member.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_advance.php
│  │  │  │      api_b2b_2_0_member.php
│  │  │  │
│  │  │  ├─3.0
│  │  │  │      api_b2b_3_0_member.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_advance_application_error.php
│  │  │          b2b_member_application_error.php
│  │  │          member_application_error.php
│  │  │
│  │  ├─order
│  │  │  ├─1.0
│  │  │  │      api_1_0_order.php
│  │  │  │      api_b2b_1_0_delivery.php
│  │  │  │      api_b2b_1_0_order.php
│  │  │  │      api_b2b_1_0_refund.php
│  │  │  │      api_b2c_1_0_delivery.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_order.php
│  │  │  │      api_b2b_2_0_refund.php
│  │  │  │      api_b2c_2_0_delivery.php
│  │  │  │
│  │  │  ├─3.0
│  │  │  │      api_b2b_3_0_order.php
│  │  │  │
│  │  │  ├─3.1
│  │  │  │      api_b2b_3_1_order.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_order_application_error.php
│  │  │          b2b_refund_application_error.php
│  │  │          order_application_error.php
│  │  │
│  │  ├─payment
│  │  │  ├─1.0
│  │  │  │      api_b2b_1_0_payment.php
│  │  │  │      api_b2b_1_0_payment_cfg.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_payment.php
│  │  │  │      api_b2b_2_0_payment_cfg.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_payment_application_error.php
│  │  │          b2b_payment_cfg_application_error.php
│  │  │          payment_application_error.php
│  │  │
│  │  ├─product
│  │  │  ├─1.0
│  │  │  │      api_1_0_product.php
│  │  │  │      api_b2b_1_0_product.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_product.php
│  │  │  │
│  │  │  ├─3.0
│  │  │  │      api_b2b_3_0_product.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_product_application_error.php
│  │  │          product_application_error.php
│  │  │
│  │  ├─productline
│  │  │  ├─1.0
│  │  │  │      api_b2b_1_0_productline.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_productline.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_productline_application_error.php
│  │  │
│  │  ├─refund
│  │  │  ├─1.0
│  │  │  │      api_1_0_refund.php
│  │  │  │
│  │  │  └─application_error
│  │  │          refund_application_error.php
│  │  │
│  │  ├─shipping
│  │  │  ├─1.0
│  │  │  │      api_b2b_1_0_area.php
│  │  │  │      api_b2b_1_0_corp.php
│  │  │  │      api_b2b_1_0_h_area.php
│  │  │  │      api_b2b_1_0_region.php
│  │  │  │      api_b2b_1_0_type.php
│  │  │  │
│  │  │  ├─2.0
│  │  │  │      api_b2b_2_0_region.php
│  │  │  │
│  │  │  └─application_error
│  │  │          b2b_region_application_error.php
│  │  │
│  │  ├─site
│  │  │  ├─1.0
│  │  │  │      api_1_0_site.php
│  │  │  │      api_b2b_1_0_brand.php
│  │  │  │      api_b2b_1_0_cat.php
│  │  │  │      api_b2b_1_0_cur.php
│  │  │  │      api_b2b_1_0_goodstype.php
│  │  │  │      api_b2b_1_0_spec.php
│  │  │  │
│  │  │  └─2.0
│  │  │          api_b2b_2_0_brand.php
│  │  │          api_b2b_2_0_cat.php
│  │  │          api_b2b_2_0_goodstype.php
│  │  │          api_b2b_2_0_spec.php
│  │  │          api_b2b_2_0_sync.php
│  │  │
│  │  ├─taobao
│  │  │  │  api_products.php
│  │  │  │
│  │  │  └─3.1
│  │  │          api_b2b_3_1_csvfile.php
│  │  │
│  │  └─tools
│  │      └─1.0
│  │              api_b2b_1_0_tools.php
│  │
│  ├─assistant
│  │  │  api.php
│  │  │
│  │  ├─lib
│  │  │      BaseService.php
│  │  │      BaseValidator.php
│  │  │      GeneralFunc.php
│  │  │      LogUtils.php
│  │  │      nudime.php
│  │  │      ServerUtils.php
│  │  │      TextUtils.php
│  │  │
│  │  ├─service
│  │  │      service.Login.php
│  │  │      service.PartView.php
│  │  │      service.ShopInfo.php
│  │  │      service.SyncFile.php
│  │  │      service.SyncRecord.php
│  │  │
│  │  └─validator
│  │          articles.1.validator.php
│  │          brand.1.validator.php
│  │          gimages.1.validator.php
│  │          goods.1.validator.php
│  │          goods_cat.1.validator.php
│  │          goods_keywords.1.validator.php
│  │          goods_lv_price.1.validator.php
│  │          goods_memo.1.validator.php
│  │          goods_rate.1.validator.php
│  │          goods_spec_index.1.validator.php
│  │          goods_type.1.validator.php
│  │          goods_type_spec.1.validator.php
│  │          member_lv.1.validator.php
│  │          products.1.validator.php
│  │          sitemaps.1.validator.php
│  │          specification.1.validator.php
│  │          spec_values.1.validator.php
│  │          tags.1.validator.php
│  │          tag_rel.1.validator.php
│  │          taobao_goods.1.validator.php
│  │          type_brand.1.validator.php
│  │
│  ├─entity
│  │      entity.goods.php
│  │      entity.member.php
│  │      entity.order.php
│  │
│  ├─html
│  │  ├─misc
│  │  │      orderprint.html
│  │  │
│  │  └─pages
│  │          about.html
│  │          business.html
│  │          contact.html
│  │          disclaimer.html
│  │          helpcenter.html
│  │          jobs.html
│  │          license.html
│  │          memberrank.html
│  │          method.html
│  │          newguide.html
│  │          nonmember.html
│  │          notice.html
│  │          onlinepayment.html
│  │          orderinfo.html
│  │          orderstatus.html
│  │          payment.html
│  │          privacy.html
│  │          process.html
│  │          returngood.html
│  │          scoreplan.html
│  │          service.html
│  │          shipping.html
│  │          shippinginfo.html
│  │          terms.html
│  │
│  ├─include    内容同 include_V5, 加密
│  │
│  ├─include_v5
│  │  │  adminCore.php
│  │  │  adminPage.php
│  │  │  adminSchema.php
│  │  │  AloneDB.php
│  │  │  app.php
│  │  │  cachemgr.php
│  │  │  crontab.php
│  │  │  ctlmap.php
│  │  │  dapi.php
│  │  │  datatypes.php
│  │  │  defined.php
│  │  │  delivercorp.php
│  │  │  hookFactory.php
│  │  │  http.php
│  │  │  magicvars_sys.php
│  │  │  mapfile.php
│  │  │  modelFactory.php
│  │  │  modifiers.php
│  │  │  objectPage.php
│  │  │  pageFactory.php
│  │  │  paymentPlugin.php
│  │  │  phpFtp.php
│  │  │  plugin.php
│  │  │  relation.php
│  │  │  secache.php
│  │  │  secache_no_flock.php
│  │  │  setmgr.php
│  │  │  setting.php
│  │  │  shopCore.php
│  │  │  shopctls.php
│  │  │  shopdav.php
│  │  │  shopObject.php
│  │  │  shopPage.php
│  │  │  shopPreview.php
│  │  │  shopSchema.php
│  │  │  simplehash.php
│  │  │
│  │  ├─core
│  │  │      action.export.php
│  │  │      action.finder_lister.php
│  │  │      db.split_sql.php
│  │  │      db.tools.php
│  │  │      gcat.get.php
│  │  │      goods.check_gspec.php
│  │  │      goods.check_import.php
│  │  │      goods.export.php
│  │  │      goods.filter.php
│  │  │      goods.filter_of_type.php
│  │  │      goods.get_filter.php
│  │  │      goods.get_spare_price.php
│  │  │      goods.import.php
│  │  │      goods.import_goodsline.php
│  │  │      goods.import_product.php
│  │  │      goods.import_productline.php
│  │  │      goods.insert.php
│  │  │      goods.insert_link.php
│  │  │      goods.list.php
│  │  │      goods.update_member_price.php
│  │  │      goods.update_price.php
│  │  │      object.batch_edit.php
│  │  │      object.cols.type.php
│  │  │      object.column_value.php
│  │  │      object.delete.php
│  │  │      object.export.php
│  │  │      object.filter_parser.php
│  │  │      object.insert.php
│  │  │      object.update.php
│  │  │
│  │  ├─funcs
│  │  │      get_class_struct.php
│  │  │      http.php
│  │  │
│  │  ├─shop
│  │  │      admin.menu_filter.php
│  │  │      core.debugger.php
│  │  │      core.location.php
│  │  │      core.match_network.php
│  │  │      core.time_auth.php
│  │  │      core.upgrade.php
│  │  │      shop.front_api.php
│  │  │
│  │  ├─smartyplugins
│  │  │      block.capture.php
│  │  │      block.safehtml.php
│  │  │      block.textformat.php
│  │  │      compiler.img.php
│  │  │      compiler.input.php
│  │  │      compiler.in_array.php
│  │  │      compiler.link.php
│  │  │      compiler.main.php
│  │  │      compiler.math.php
│  │  │      compiler.require.php
│  │  │      compiler.widgets.php
│  │  │      compile_modifier.cur.php
│  │  │      compile_modifier.default.php
│  │  │      compile_modifier.gimage.php
│  │  │      compile_modifier.safehtml.php
│  │  │      function.counter.php
│  │  │      function.cycle.php
│  │  │      function.fixurl.php
│  │  │      function.footer.php
│  │  │      function.goodsmenu.php
│  │  │      function.header.php
│  │  │      function.html_checkboxes.php
│  │  │      function.html_input.php
│  │  │      function.html_options.php
│  │  │      function.html_radios.php
│  │  │      function.html_select_date.php
│  │  │      function.html_select_time.php
│  │  │      function.html_table.php
│  │  │      function.javascript.php
│  │  │      function.link.php
│  │  │      function.mailto.php
│  │  │      function.pager.php
│  │  │      function.widgets.php
│  │  │      input.bool.php
│  │  │      input.checkbox.php
│  │  │      input.color.php
│  │  │      input.combox.php
│  │  │      input.date.php
│  │  │      input.default.php
│  │  │      input.fontset.php
│  │  │      input.gender.php
│  │  │      input.html.php
│  │  │      input.intbool.php
│  │  │      input.money.php
│  │  │      input.radio.php
│  │  │      input.region.php
│  │  │      input.select.php
│  │  │      input.textarea.php
│  │  │      input.time.php
│  │  │      input.tinybool.php
│  │  │      modifier.amount.php
│  │  │      modifier.cdate.php
│  │  │      modifier.cut.php
│  │  │      modifier.date.php
│  │  │      modifier.date_format.php
│  │  │      modifier.escape.php
│  │  │      modifier.gender.php
│  │  │      modifier.number.php
│  │  │      modifier.paddingleft.php
│  │  │      modifier.regex_replace.php
│  │  │      modifier.region.php
│  │  │      modifier.replace.php
│  │  │      modifier.shopbbsdate.php
│  │  │      modifier.storager.php
│  │  │      modifier.strip.php
│  │  │      modifier.styleset.php
│  │  │      modifier.timeleft.php
│  │  │      modifier.truncate.php
│  │  │      modifier.userdate.php
│  │  │      modifier.usertime.php
│  │  │      outputfilter.trimwhitespace.php
│  │  │      shared.escape_chars.php
│  │  │
│  │  └─template
│  │          compile.admin_plugin_path.php
│  │          compile.compile_custom_block.php
│  │          compile.compile_custom_function.php
│  │          compile.include.php
│  │          compile.plugin_path.php
│  │          compile.section_start.php
│  │
│  ├─lib
│  │  │  curl.php
│  │  │  json.php
│  │  │  mysqldumper.class.php
│  │  │  nusoap.php
│  │  │
│  │  ├─charset
│  │  │      char_local.php
│  │  │      char_utf.php
│  │  │      utf2zh.dat
│  │  │      zh2utf.dat
│  │  │
│  │  ├─pear
│  │  │      DIME.php
│  │  │      PEAR.php
│  │  │
│  │  └─uc_client
│  │      │  client.php
│  │      │  index.htm
│  │      │
│  │      ├─control
│  │      │      app.php
│  │      │      cache.php
│  │      │      domain.php
│  │      │      feed.php
│  │      │      friend.php
│  │      │      index.htm
│  │      │      pm.php
│  │      │      tag.php
│  │      │      user.php
│  │      │
│  │      ├─data
│  │      │  └─cache
│  │      ├─lib
│  │      │      db.class.php
│  │      │      index.htm
│  │      │      uccode.class.php
│  │      │      xml.class.php
│  │      │
│  │      └─model
│  │              app.php
│  │              base.php
│  │              cache.php
│  │              domain.php
│  │              friend.php
│  │              index.htm
│  │              misc.php
│  │              note.php
│  │              pm.php
│  │              tag.php
│  │              user.php
│  │
│  ├─model          内容同model_v5,加密
│  │
│  ├─model_v5
│  │  │  mdl.adminprofile.php
│  │  │
│  │  ├─admin
│  │  │      mdl.adminroles.php
│  │  │      mdl.operator.php
│  │  │
│  │  ├─comment
│  │  │      mdl.comment.php
│  │  │      mdl.discuss.php
│  │  │      mdl.gask.php
│  │  │
│  │  ├─content
│  │  │      mdl.article.php
│  │  │      mdl.compile_widgets.php
│  │  │      mdl.custommessage.php
│  │  │      mdl.frendlink.php
│  │  │      mdl.page.php
│  │  │      mdl.sitemap.php
│  │  │      mdl.systmpl.php
│  │  │      mdl.widgets.php
│  │  │
│  │  ├─distribution
│  │  │      mdl.autosync.php
│  │  │      mdl.costsync.php
│  │  │      mdl.datasync.php
│  │  │      mdl.supplier.php
│  │  │      mdl.syncjob.php
│  │  │
│  │  ├─goods
│  │  │      mdl.brand.php
│  │  │      mdl.finderPdt.php
│  │  │      mdl.gimage.php
│  │  │      mdl.goodsNotify.php
│  │  │      mdl.gtype.php
│  │  │      mdl.gtypetransform.php
│  │  │      mdl.productCat.php
│  │  │      mdl.products.php
│  │  │      mdl.schema.php
│  │  │      mdl.search.php
│  │  │      mdl.specification.php
│  │  │      mdl.virtualcat.php
│  │  │
│  │  ├─member
│  │  │      mdl.account.php
│  │  │      mdl.advance.php
│  │  │      mdl.level.php
│  │  │      mdl.member.php
│  │  │      mdl.memberattr.php
│  │  │      mdl.passport.php
│  │  │
│  │  ├─purchase
│  │  │      mdl.b2bcur.php
│  │  │      mdl.order_po.php
│  │  │      mdl.po.php
│  │  │
│  │  ├─resources
│  │  │      mdl.message.php
│  │  │      mdl.msgbox.php
│  │  │      mdl.shopbbs.php
│  │  │      mdl.tmpimage.php
│  │  │
│  │  ├─service
│  │  │      mdl.apiclient.php
│  │  │      mdl.app_center.php
│  │  │      mdl.certificate.php
│  │  │      mdl.data_install.php
│  │  │      mdl.kft.php
│  │  │      mdl.saas.php
│  │  │      mdl.saasdata.php
│  │  │
│  │  ├─sync
│  │  │  └─order
│  │  │          mdl.order.php
│  │  │
│  │  ├─system
│  │  │      mdl.addons.php
│  │  │      mdl.appmgr.php
│  │  │      mdl.backup.php
│  │  │      mdl.cur.php
│  │  │      mdl.dataio.php
│  │  │      mdl.debug.php
│  │  │      mdl.email.php
│  │  │      mdl.entity.php
│  │  │      mdl.frontend.php
│  │  │      mdl.local.php
│  │  │      mdl.magicvars.php
│  │  │      mdl.math.php
│  │  │      mdl.messenger.php
│  │  │      mdl.messenger0.php
│  │  │      mdl.pubfile.php
│  │  │      mdl.seo.php
│  │  │      mdl.sfile.php
│  │  │      mdl.status.php
│  │  │      mdl.storager.php
│  │  │      mdl.tag.php
│  │  │      mdl.template.php
│  │  │      mdl.tramsy.php
│  │  │      mdl.trigger.php
│  │  │      mdl.upgrade.php
│  │  │
│  │  ├─trading
│  │  │      mdl.cart.php
│  │  │      mdl.coupon.php
│  │  │      mdl.couponGenerate.php
│  │  │      mdl.delivery.php
│  │  │      mdl.deliveryarea.php
│  │  │      mdl.deliverycorp.php
│  │  │      mdl.dly_centers.php
│  │  │      mdl.dly_printer.php
│  │  │      mdl.exchangeCoupon.php
│  │  │      mdl.gift.php
│  │  │      mdl.giftcat.php
│  │  │      mdl.goods.php
│  │  │      mdl.memberExperience.php
│  │  │      mdl.memberPoint.php
│  │  │      mdl.order.php
│  │  │      mdl.package.php
│  │  │      mdl.payment.php
│  │  │      mdl.paymentcfg.php
│  │  │      mdl.point.php
│  │  │      mdl.pointHistory.php
│  │  │      mdl.promotion.php
│  │  │      mdl.promotionActivity.php
│  │  │      mdl.promotionScheme.php
│  │  │      mdl.refund.php
│  │  │      mdl.reship.php
│  │  │      mdl.return_product.php
│  │  │      mdl.sale.php
│  │  │      mdl.shipping.php
│  │  │      mdl.taobaoordercsv.php
│  │  │
│  │  └─utility
│  │          mdl.archive.php
│  │          mdl.barcode.php
│  │          mdl.charset.php
│  │          mdl.data_verify.php
│  │          mdl.gdimage.php
│  │          mdl.http_client.php
│  │          mdl.language.php
│  │          mdl.magickwand.php
│  │          mdl.rest_client.php
│  │          mdl.salescount.php
│  │          mdl.schemas.php
│  │          mdl.serverinfo.php
│  │          mdl.sha1.php
│  │          mdl.smtp.php
│  │          mdl.tar.php
│  │          mdl.tools.php
│  │          mdl.url.php
│  │          mdl.vcode.php
│  │          mdl.verifyCode.php
│  │          mdl.xml.php
│  │
│  ├─schemas
│  │      admin_roles.php
│  │      advance_logs.php
│  │      articles.php
│  │      autosync_rule.php
│  │      autosync_rule_relation.php
│  │      autosync_task.php
│  │      brand.php
│  │      cachemgr.php
│  │      comments.php
│  │      cost_sync.php
│  │      coupons.php
│  │      coupons_p_items.php
│  │      coupons_u_items.php
│  │      ctlmap.php
│  │      currency.php
│  │      dapi.php
│  │      delivery.php
│  │      delivery_item.php
│  │      dly_area.php
│  │      dly_center.php
│  │      dly_corp.php
│  │      dly_h_area.php
│  │      dly_type.php
│  │      gift.php
│  │      gift_cat.php
│  │      gift_items.php
│  │      gimages.php
│  │      gnotify.php
│  │      goods.php
│  │      goods_cat.php
│  │      goods_keywords.php
│  │      goods_lv_price.php
│  │      goods_memo.php
│  │      goods_rate.php
│  │      goods_spec_index.php
│  │      goods_type.php
│  │      goods_type_spec.php
│  │      goods_virtual_cat.php
│  │      gtask.php
│  │      image_sync.php
│  │      job_apilist.php
│  │      job_data_sync.php
│  │      job_goods_download.php
│  │      link.php
│  │      lnk_acts.php
│  │      lnk_roles.php
│  │      magicvars.php
│  │      members.php
│  │      member_addrs.php
│  │      member_attr.php
│  │      member_coupon.php
│  │      member_lv.php
│  │      member_mattrvalue.php
│  │      message.php
│  │      msgqueue.php
│  │      operators.php
│  │      op_sessions.php
│  │      orders.php
│  │      order_items.php
│  │      order_log.php
│  │      order_pmt.php
│  │      package_product.php
│  │      pages.php
│  │      payments.php
│  │      payment_cfg.php
│  │      plugins.php
│  │      pmt_gen_coupon.php
│  │      pmt_goods.php
│  │      pmt_goods_cat.php
│  │      pmt_member_lv.php
│  │      point_history.php
│  │      print_tmpl.php
│  │      products.php
│  │      product_memo.php
│  │      promotion.php
│  │      promotion_activity.php
│  │      promotion_scheme.php
│  │      pub_files.php
│  │      refunds.php
│  │      regions.php
│  │      return_product.php
│  │      sell_logs.php
│  │      sendbox.php
│  │      seo.php
│  │      settings.php
│  │      sfiles.php
│  │      sitemaps.php
│  │      specification.php
│  │      spec_values.php
│  │      status.php
│  │      supplier.php
│  │      supplier_pdtbn.php
│  │      sync_tmp.php
│  │      systmpl.php
│  │      tags.php
│  │      tag_rel.php
│  │      template_relation.php
│  │      themes.php
│  │      tpl_source.php
│  │      triggers.php
│  │      trust_login.php
│  │      type_brand.php
│  │      widgets_set.php
│  │
│  ├─shop
│  │  ├─controller
│  │  │      ctl.article.php
│  │  │      ctl.artlist.php
│  │  │      ctl.brand.php
│  │  │      ctl.cart.php
│  │  │      ctl.comment.php
│  │  │      ctl.custompage.php
│  │  │      ctl.gallery.php
│  │  │      ctl.gift.php
│  │  │      ctl.link.php
│  │  │      ctl.member.php
│  │  │      ctl.message.php
│  │  │      ctl.order.php
│  │  │      ctl.package.php
│  │  │      ctl.page.php
│  │  │      ctl.passport.php
│  │  │      ctl.paycenter.php
│  │  │      ctl.previewtheme.php
│  │  │      ctl.product.php
│  │  │      ctl.search.php
│  │  │      ctl.sitemaps.php
│  │  │      ctl.tools.php
│  │  │      ctl.wholesale.php
│  │  │
│  │  └─view
│  │      ├─article
│  │      │      index.html
│  │      │
│  │      ├─artlist
│  │      │      index.html
│  │      │
│  │      ├─brand
│  │      │      index.html
│  │      │      showList.html
│  │      │
│  │      ├─cart
│  │      │      cart_total.html
│  │      │      checkout.html
│  │      │      checkout_base.html
│  │      │      checkout_shipping.html
│  │      │      checkout_total.html
│  │      │      index.html
│  │      │      loginBuy.html
│  │      │      loginbuy_fast.html
│  │      │      mini_cart.html
│  │      │      mini_cart_list.html
│  │      │      view.html
│  │      │
│  │      ├─comment
│  │      │      commentlist.html
│  │      │      reply.html
│  │      │
│  │      ├─common
│  │      │      delivery.html
│  │      │      dialog_receiver.html
│  │      │      footer.html
│  │      │      header.html
│  │      │      orderinfo.html
│  │      │      paymethod.html
│  │      │      receiver.html
│  │      │      rec_addr.html
│  │      │      upgrade.html
│  │      │
│  │      ├─gallery
│  │      │  │  index.html
│  │      │  │
│  │      │  ├─selector
│  │      │  │      default.html
│  │      │  │      multi.html
│  │      │  │
│  │      │  └─type
│  │      │          grid.html
│  │      │          list.html
│  │      │          text.html
│  │      │
│  │      ├─gift
│  │      │      index.html
│  │      │      showList.html
│  │      │
│  │      ├─link
│  │      │      showList.html
│  │      │
│  │      ├─member
│  │      │      addOrderMsg.html
│  │      │      addReceiver.html
│  │      │      balance.html
│  │      │      comment.html
│  │      │      coupon.html
│  │      │      couponExchange.html
│  │      │      deposit.html
│  │      │      favorite.html
│  │      │      inbox.html
│  │      │      index.html
│  │      │      main.html
│  │      │      message.html
│  │      │      modifyReceiver.html
│  │      │      notify.html
│  │      │      orderdetail.html
│  │      │      orderpay.html
│  │      │      orders.html
│  │      │      outbox.html
│  │      │      pointHistory.html
│  │      │      receiver.html
│  │      │      return_add.html
│  │      │      return_details.html
│  │      │      return_list.html
│  │      │      return_list_item.html
│  │      │      return_order_list.html
│  │      │      return_policy.html
│  │      │      security.html
│  │      │      send.html
│  │      │      setting.html
│  │      │      track.html
│  │      │
│  │      ├─message
│  │      │      index.html
│  │      │
│  │      ├─order
│  │      │      detail.html
│  │      │      index.html
│  │      │
│  │      ├─package
│  │      │      index.html
│  │      │
│  │      ├─page
│  │      │      error.html
│  │      │      single-page.html
│  │      │      system-error.html
│  │      │
│  │      ├─passport
│  │      │  │  create.html
│  │      │  │  error.html
│  │      │  │  index.html
│  │      │  │  login.html
│  │      │  │  lost.html
│  │      │  │  other_login.html
│  │      │  │  recover.html
│  │      │  │  signup.html
│  │      │  │
│  │      │  └─index
│  │      │          login.html
│  │      │          login_fast.html
│  │      │          recover.html
│  │      │          signup.html
│  │      │          signup_fast.html
│  │      │
│  │      ├─paycenter
│  │      │      order.html
│  │      │      result.html
│  │      │
│  │      ├─product
│  │      │      diff.html
│  │      │      gnotify.html
│  │      │      goodspics.html
│  │      │      index.html
│  │      │      menu.html
│  │      │      selllog.html
│  │      │      viewpic.html
│  │      │
│  │      ├─search
│  │      │      index.html
│  │      │      showCat.html
│  │      │
│  │      ├─sitemaps
│  │      │      view.html
│  │      │
│  │      ├─splash
│  │      │      failed.html
│  │      │      success.html
│  │      │
│  │      ├─tools
│  │      │      history.html
│  │      │
│  │      └─utility
│  │              select.html
│  │
│  └─updatescripts
│      │  11705.sql
│      │  12175.sql
│      │  12659.sql
│      │  13035.sql
│      │  13936.sql
│      │  15211.sql
│      │  16111.sql
│      │  16587.php
│      │  16587.sql
│      │  18137.php
│      │  18137.sql
│      │  21246.php
│      │  21246.sql
│      │  27449.sql
│      │  28008.php
│      │  28009.sql
│      │  31323.sql
│      │  32890.sql
│      │  35866.php
│      │  35866.sql
│      │  40195.php
│      │  50000.php
│      │
│      └─21246
│              area.txt
│
├─home
│  ├─backup     备份数据
│  ├─cache      缓存数据
│  │  │
│  │  │  cachedata.php    前台全页缓存
│  │  ├─admin_tmpl     后台模板编译
│  │  └─front_tmpl     前台模板编译
│  │
│  ├─download   下载
│  ├─logs       日志
│  ├─sendtmp
│  │      defaultApp.log
│  │      hytmp.php
│  │
│  ├─tmp
│  └─upload     上传的源文件
│
├─images      媒体文件目录
│  ├─20120202    文章图片, 商品描述,商品图片,模板中上传的图片,按月存放
│  ├─article     ...
│  ├─default     默认规格,上传的logo,上传的系统用到的非广告文件,如系统默认图片
│  │  │  default_big_pic.gif
│  │  │  ......
│  │  │  wm_small_pic.png
│  │  │
│  │  └─upload
│  ├─gift        积分商品
│  └─goods       商品的缩略图
├─install     安装目录
│  │  index.php
│  │  info.xml
│  │  install.core.php
│  │  svinfo.php          探针
│  │
│  ├─dbscripts
│  │      demo.sql
│  │      init.sql
│  │
│  ├─images
│  │
│  ├─templates_c
│  │
│  └─view
│
├─plugins
│  │  loader.php
│  │
│  ├─actions     网店机器人
│  │      action.member.php
│  │      action.order.php
│  │      action.system.php
│  │
│  ├─app  应用中心
│  │  ├─commodity_radar     商品雷达
│  │  │  │  app.commodity_radar.php
│  │  │  │  commodity_radar_default_modifiers.php
│  │  │  │  commodity_radar_public.php
│  │  │  │
│  │  │  └─view
│  │  │          finder_name.html
│  │  │
│  │  ├─openid_taobao       淘宝信任登录
│  │  │      .app.openid_taobao.php.swo
│  │  │      .app.openid_taobao.php.swp
│  │  │      app.openid_taobao.php
│  │  │      app.openid_taobao.php.bak
│  │  │      mdl.openid_taobao_center_send.php
│  │  │
│  │  ├─pay_alipay
│  │  │      app.pay_alipay.php
│  │  │      mdl.center_send.php
│  │  │      paymentPlugin.php
│  │  │      pay_alipay.php
│  │  │      pay_alipay.server.php
│  │  │
│  │  ├─pay_deposit
│  │  │      app.pay_deposit.php
│  │  │      paymentPlugin.php
│  │  │      pay_deposit.php
│  │  │
│  │  ├─pay_haipay
│  │  │      app.pay_haipay.php
│  │  │      paymentPlugin.php
│  │  │      pay_haipay.php
│  │  │
│  │  ├─pay_offline
│  │  │      app.pay_offline.php
│  │  │      paymentPlugin.php
│  │  │      pay_offline.php
│  │  │
│  │  ├─pay_tenpaytrad
│  │  │      app.pay_tenpaytrad.php
│  │  │      mdl.center_send.php
│  │  │      paymentPlugin.php
│  │  │      pay_tenpaytrad.php
│  │  │      pay_tenpaytrad.server.php
│  │  │
│  │  ├─shopex_stat          营销统计工具
│  │  │  │  admin.stat_ctl.php
│  │  │  │  app.shopex_stat.php
│  │  │  │  mdl.shopex_stat.php
│  │  │  │  shopex_stat_lismember.php
│  │  │  │  shopex_stat_lisproduct.php
│  │  │  │  shopex_stat_listener.php
│  │  │  │  shopex_stat_modifiers.php
│  │  │  │
│  │  │  └─view
│  │  │          index.html
│  │  │
│  │  ├─taobao_goods          同步管理淘宝商品
│  │  │  │  admin.ctl_taobao_goods.php
│  │  │  │  app.taobao_goods.php
│  │  │  │  icon.png
│  │  │  │  mdl.center_send.php
│  │  │  │  mdl.gtypetransform.php
│  │  │  │  mdl.taobao.php
│  │  │  │  setting.php
│  │  │  │  taobao_goods_product_listener.php
│  │  │  │  taobao_goods_product_modifiers.php
│  │  │  │
│  │  │  ├─dbschema
│  │  │  │      goods.php
│  │  │  │
│  │  │  ├─images
│  │  │  │
│  │  │  └─view
│  │  │          debug.html
│  │  │          goods_props.html
│  │  │          product_add.html
│  │  │          select_category.html
│  │  │          sess_timeout.html
│  │  │          spec_row.html
│  │  │          taobao_cat.html
│  │  │          taobao_postage.html
│  │  │          tb_areas.html
│  │  │          tb_cats.html
│  │  │
│  │  ├─tb_order_ctl           同步处理淘宝订单
│  │  │  │  admin.order_ctl.php
│  │  │  │  admin.tb_notify.php
│  │  │  │  app.tb_order_ctl.php
│  │  │  │  icon.png
│  │  │  │  mdl.center_send.php
│  │  │  │  mdl.tborder.php
│  │  │  │  setting.php
│  │  │  │  tb_notify.php
│  │  │  │
│  │  │  ├─dbdata
│  │  │  │      taobao_region.sql
│  │  │  │
│  │  │  ├─dbschema
│  │  │  │      orders.php
│  │  │  │      order_items.php
│  │  │  │      regions.php
│  │  │  │
│  │  │  ├─images
│  │  │  │
│  │  │  └─view
│  │  │      │  sess_timeout.html
│  │  │      │  set_nick.html
│  │  │      │
│  │  │      └─order
│  │  │              addtradenote.html
│  │  │              finder_action.html
│  │  │              orderconsign.html
│  │  │              orderprint.html
│  │  │              order_detail.html
│  │  │              order_status.html
│  │  │              set_order_price.html
│  │  │              taobao_frame.html
│  │  │
│  │  └─tb_sales_download     下载淘宝销售记录
│  │      │  admin.sales_ctl.php
│  │      │  app.tb_sales_download.php
│  │      │  icon.png
│  │      │  mdl.center_send.php
│  │      │  mdl.tbsales.php
│  │      │  setting.php
│  │      │
│  │      ├─dbschema
│  │      │      sell_log.php
│  │      │
│  │      ├─images
│  │      │
│  │      └─view
│  │          │  sess_timeout.html
│  │          │  set_nick.html
│  │          │
│  │          └─sales
│  │                  dotaobao_rate.html
│  │
│  ├─dataio       数据导入导出插件
│  │      io.csv.php
│  │      io.gtype.php
│  │      io.sitezol.php
│  │      io.taobaogoodscsv.php
│  │      io.taobaoordercsv.php
│  │      io.txt.php
│  │      io.xls.php
│  │      io.xml.php
│  │
│  ├─functions
│  │      cacheApc.php
│  │      cachedir.php
│  │      cache_memcache.php
│  │      fs_storage.php
│  │      ftp_storage.php
│  │      tt_storage.php
│  │      urlmap.php
│  │
│  ├─layout      单独页面布局插件
│  │  ├─1-column
│  │  │      layout.html
│  │  │      layout_1-column.php
│  │  │      preview.png
│  │  │
│  │  ├─2-columns-left
│  │  │      layout.html
│  │  │      layout_2-columns-left.php
│  │  │      preview.png
│  │  │
│  │  ├─2-columns-right
│  │  │      layout.html
│  │  │      layout_2-columns-right.php
│  │  │      preview.png
│  │  │
│  │  └─3-columns
│  │          layout.html
│  │          layout_3-columns.php
│  │          preview.png
│  │
│  ├─location     地区数据插件
│  │  └─mainland
│  │          area.txt
│  │          local.mainland.php
│  │          regions.csv
│  │
│  ├─messenger    用户消息插件
│  │  ├─email
│  │  │      account-chgpass.html
│  │  │      account-lostPw.html
│  │  │      account-register.html
│  │  │      goods-notify.html
│  │  │      messenger.email.php
│  │  │      order-cancel.html
│  │  │      order-create.html
│  │  │      order-payed.html
│  │  │      order-refund.html
│  │  │      order-returned.html
│  │  │      order-shipping.html
│  │  │
│  │  ├─msgbox
│  │  │      account-chgpass.html
│  │  │      account-lostPw.html
│  │  │      account-register.html
│  │  │      goods-notify.html
│  │  │      messenger.msgbox.php
│  │  │      order-cancel.html
│  │  │      order-create.html
│  │  │      order-payed.html
│  │  │      order-refund.html
│  │  │      order-returned.html
│  │  │      order-shipping.html
│  │  │
│  │  └─sms
│  │          account-chgpass.html
│  │          account-lostPw.html
│  │          account-register.html
│  │          goods-notify.html
│  │          messenger.sms.php
│  │          order-cancel.html
│  │          order-create.html
│  │          order-payed.html
│  │          order-refund.html
│  │          order-returned.html
│  │          order-shipping.html
│  │
│  ├─passport   用户登录插件
│  │      passport.discuz.php
│  │      passport.phpwind.php
│  │      passport.phpwind7.php
│  │      passport.ucenter.php
│  │
│  ├─payment     支付方式插件
│  │  │  disabled_payments.txt
│  │  │  pay.2checkout.php
│  │  │  pay.6688.php
│  │  │  pay.800pay.php
│  │  │  pay.99bill.php
│  │  │  pay.abank.php
│  │  │  pay.alipay.php
│  │  │  pay.alipay.server.php
│  │  │  pay.alipaytrad.php
│  │  │  pay.alipaytrad.server.php
│  │  │  pay.chinapay.php
│  │  │  pay.chinapnr.php
│  │  │  pay.chinapnr.server.php
│  │  │  pay.cmbc.php
│  │  │  pay.cncard.php
│  │  │  pay.cncard.server.php
│  │  │  pay.deposit.php
│  │  │  pay.ecs.php
│  │  │  pay.egold.php
│  │  │  pay.enets.php
│  │  │  pay.epay.php
│  │  │  pay.google.php
│  │  │  pay.gwpay.php
│  │  │  pay.haipay.php
│  │  │  pay.haipay.server.php
│  │  │  pay.homeway.php
│  │  │  pay.hyl.php
│  │  │  pay.icbc.php
│  │  │  pay.iepay.php
│  │  │  pay.ipay.php
│  │  │  pay.ips3.php
│  │  │  pay.ips3.server.php
│  │  │  pay.mobile88.php
│  │  │  pay.moneybookers.php
│  │  │  pay.nochek.php
│  │  │  pay.npay.php
│  │  │  pay.nps.php
│  │  │  pay.nps_out.php
│  │  │  pay.offline.php
│  │  │  pay.pay100.php
│  │  │  pay.paydollar.php
│  │  │  pay.paypal.php
│  │  │  pay.paypal.server.php
│  │  │  pay.paypal_cn.php
│  │  │  pay.shouxin.php
│  │  │  pay.skypay.php
│  │  │  pay.smilepay.php
│  │  │  pay.tenpay.php
│  │  │  pay.tenpaytrad.php
│  │  │  pay.tenpaytrad.server.php
│  │  │  pay.twv.php
│  │  │  pay.udpay.php
│  │  │  pay.udpay.server.php
│  │  │  pay.unspay.php
│  │  │  pay.wangjin_out.php
│  │  │  pay.wangyin.php
│  │  │  pay.yeepay.php
│  │  │  paymentPlugin.php
│  │  │
│  │  ├─images
│  │  │
│  │  └─reg
│  │          pay.99billreg.php
│  │
│  ├─pmtScheme    促销方式插件
│  │      pmt.c_1.php
│  │      pmt.c_2.php
│  │      pmt.c_3.php
│  │      pmt.c_4.php
│  │      pmt.c_5.php
│  │      pmt.c_6.php
│  │      pmt.c_7.php
│  │      pmt.n_1.php
│  │      pmt.n_2.php
│  │      pmt.n_3.php
│  │      pmt.n_4.php
│  │      pmt.n_5.php
│  │      pmt.n_6.php
│  │      pmt.n_7.php
│  │
│  ├─schema       商品插件
│  │  ├─custom
│  │  │  │  icon-48x48.png
│  │  │  │  schema.custom.php
│  │  │  │
│  │  │  └─view
│  │  │          init.html
│  │  │
│  │  └─simple
│  │          icon-48x48.png
│  │          schema.simple.php
│  │
│  └─widgets      网页挂件
│      ├─ad
│      │      default.html
│      │      widgets.php
│      │      widget_ad.php
│      │      _config.html
│      │
│      ├─ad_curtain
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_ad_curtain.php
│      │  │  _config.html
│      │  │
│      │  └─swf
│      │          main.swf
│      │
│      ├─ad_flash
│      │      default.html
│      │      widgets.php
│      │      _config.html
│      │
│      ├─ad_multiple
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_ad_multiple.php
│      │  │  _config.html
│      │  │
│      │  ├─images
│      │  │
│      │  └─swf
│      │          main.swf
│      │
│      ├─ad_pic
│      │      default.html
│      │      widgets.php
│      │      widget_ad_pic.php
│      │      _config.html
│      │
│      ├─ad_text
│      │      default.html
│      │      widgets.php
│      │      widget_cfg_ad_text.php
│      │      _config.html
│      │
│      ├─ad_userdefine
│      │      default.html
│      │      widgets.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─article
│      │      default.html
│      │      div_list.html
│      │      multi_list.html
│      │      widgets.php
│      │      widget_article.php
│      │      widget_cfg_article.php
│      │      _config.html
│      │
│      ├─brand
│      │      default.html
│      │      newBrandList.html
│      │      widgets.php
│      │      widget_brand.php
│      │      widget_cfg_brand.php
│      │      _config.html
│      │
│      ├─cart
│      │      default.html
│      │      widgets.php
│      │      _preview.html
│      │
│      ├─circle
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_circle.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          style1.swf
│      │
│      ├─comment
│      │      default.html
│      │      widgets.php
│      │      widget_comment.php
│      │      _config.html
│      │
│      ├─coverflow
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_coverflow.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          style1.swf
│      │          test.swf
│      │
│      ├─exchangeeffect
│      │      default.html
│      │      widgets.php
│      │      widget_exchangeeffect.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─flashview
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_flashview.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          1.swf
│      │
│      ├─floweffect
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_floweffect.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          style1.swf
│      │
│      ├─gift
│      │      default.html
│      │      widgets.php
│      │      widget_gift.php
│      │      _config.html
│      │
│      ├─gifttree
│      │      default.html
│      │      widgets.php
│      │      widget_gifttree.php
│      │      _config.html
│      │
│      ├─goods
│      │      default.html
│      │      list2.html
│      │      morediv.html
│      │      pic-morediv.html
│      │      widgets.php
│      │      widget_cfg_goods.php
│      │      widget_goods.php
│      │      _config.html
│      │
│      ├─goodscat
│      │      default.html
│      │      dropdown.html
│      │      toggle.html
│      │      widgets.php
│      │      widget_goodscat.php
│      │      _config.html
│      │
│      ├─goods_show
│      │      default.html
│      │      widgets.php
│      │      widget_cfg_goods_show.php
│      │      widget_goods_show.php
│      │      _config.html
│      │
│      ├─hst
│      │      default.html
│      │      widgets.php
│      │      widget_hst.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─im
│      │  │  default.html
│      │  │  siderIm.html
│      │  │  style1.html
│      │  │  style2.html
│      │  │  style3.html
│      │  │  widgets.php
│      │  │  widget_im.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          siderIM_bg.gif
│      │          siderIM_bottom.gif
│      │          siderIM_hiddenBar.gif
│      │          siderIM_infobox.gif
│      │          siderIM_title.gif
│      │
│      ├─include
│      │      default.html
│      │      widgets.php
│      │      _config.html
│      │
│      ├─kf
│      │      default.html
│      │      widgets.php
│      │      widget_kf.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─links
│      │      default.html
│      │      linksDiv.html
│      │      style2.html
│      │      widgets.php
│      │      widget_links.php
│      │      _config.html
│      │
│      ├─logo
│      │      default.html
│      │      widgets.php
│      │
│      ├─member
│      │      bar.html
│      │      default.html
│      │      widgets.php
│      │      widget_member.php
│      │
│      ├─menutree
│      │      default.html
│      │      widgets.php
│      │      widget_menutree.php
│      │      _config.html
│      │
│      ├─menu_lv1
│      │      default.html
│      │      widgets.php
│      │      widget_menu_lv1.php
│      │      _config.html
│      │
│      ├─nav
│      │      default.html
│      │      widgets.php
│      │      widget_nav.php
│      │
│      ├─orderlist
│      │      default.html
│      │      widgets.php
│      │      widget_orderlist.php
│      │      _config.html
│      │
│      ├─rankinglist
│      │      default.html
│      │      widgets.php
│      │      widget_rankinglist.php
│      │      _config.html
│      │
│      ├─search
│      │      default.html
│      │      vertical.html
│      │      widgets.php
│      │      widget_search.php
│      │      _config.html
│      │
│      ├─slideEffectBanner
│      │      default.html
│      │      widgets.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─topbar
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_topbar.php
│      │  │  _config.html
│      │  │
│      │  └─lang
│      │          en.php
│      │
│      ├─transport
│      │      default.html
│      │      widgets.php
│      │      widget_transport.php
│      │      _config.html
│      │
│      ├─treelist
│      │      default.html
│      │      widgets.php
│      │      widget_cfg_treelist.php
│      │      widget_treelist.php
│      │      _config.html
│      │
│      ├─usercustom
│      │      default.html
│      │      widgets.php
│      │      _config.html
│      │      _preview.html
│      │
│      ├─video
│      │  │  default.html
│      │  │  widgets.php
│      │  │  widget_video.php
│      │  │  _config.html
│      │  │  _preview.html
│      │  │
│      │  └─images
│      │          style1.swf
│      │
│      └─virtualcat
│              default.html
│              dropdown.html
│              multree.html
│              toggle.html
│              treemenu.js
│              widgets.php
│              widget_cfg_virtualcat.php
│              widget_virtualcat.php
│              _config.html
│
├─public
│  │  readme.txt
│  │
│  └─fonts
├─shopadmin     后台管理
│  │  401.html                    401
│  │  api.php
│  │  blank.html
│  │  google_gears.html
│  │  index.php
│  │  mobile.php
│  │  shopadmin-manifest.php
│  │  shortcut_key_help.html      快捷键帮助
│  │  wysiwyg_editor.css
│  │
│  ├─css        后台样式
│  │      adminsinglepage.css
│  │      adminsinglepage.zcss
│  │      button.css
│  │      component.css
│  │      finder.css
│  │      forms.css
│  │      grid.css
│  │      gridlist.css
│  │      ie.css
│  │      page.css
│  │      print.css
│  │      product.css
│  │      purchase.css
│  │      reset.css
│  │      shopadmin.css
│  │      shopadmin.zcss
│  │      singlepage.css
│  │      style.css
│  │      template.css
│  │      typography.css
│  │
│  ├─demo_data  模拟数据
│  │      install_industry_data.php
│  │
│  ├─images     后台用到的图片文件,背景,图片插入
│  │
│  ├─js         js文件
│  │  │  fixie6.js
│  │  │  jstools.js
│  │  │  moo.js
│  │  │  mooadapter.js
│  │  │  moomore.js
│  │  │  sync_b2b.js
│  │  │
│  │  ├─coms
│  │  │      ajaks.js
│  │  │      areaselect.js
│  │  │      colorpicker.js
│  │  │      datapicker.js
│  │  │      dialog.js
│  │  │      dragdropplus.js
│  │  │      dropmenu.js
│  │  │      editor.js
│  │  │      editor_style_1.js
│  │  │      finder.js
│  │  │      goodseditor.js
│  │  │      historymanager.js
│  │  │      init.js
│  │  │      messagebox.js
│  │  │      productedit.js
│  │  │      shopwidgets.js
│  │  │      splash.js
│  │  │      taginputer.js
│  │  │      tagopt.js
│  │  │      treelist.js
│  │  │      uploader.js
│  │  │      validator.js
│  │  │
│  │  └─package
│  │          admin.jgz
│  │          admin.js
│  │          component.jgz
│  │          component.js
│  │          goodsedit.jgz
│  │          goodsedit.js
│  │          tools.jgz
│  │          tools.js
│  │          widgetsedit.jgz
│  │          widgetsedit.js
│  │          wysiwyg.jgz
│  │          wysiwyg.js
│  │
│  └─user_guide     用户向导
│      │  download_progress.html
│      │  install_industry_data.html
│      │  step1.html
│      │  ...
│      │  step7.html
│      │
│      └─images
│
├─statics    前台用到的js文件和图像文件
│  │  allowdrop.gif
│  │  arrowdown.gif
│  │  ......
│  ├─accountlogos  信任登陆
│  │
│  ├─bank          银行图标
│  │
│  ├─code          验证码图片
│  │
│  ├─icons         图标文件
│  │
│  ├─im            滚动聊天窗口
│  │
│  ├─remark_icons  标记
│  │
│  ├─script        js
│  │      formplus.js
│  │      goodscupcake.js
│  │      tools.jgz
│  │      tools.js
│  │
│  └─script_src    js源文件
│          broswerstore.js
│          formplus.js
│          goodscupcake.js
│          jstools.js
│          mootools.js
│
└─themes     主题目录
    └─purple     系统自带主题
        │  cart.html
        │  default-pro.html
        │  default.html
        │  gift.html
        │  index.html
        │  info.xml
        │  member.html
        │  order_detail.html
        │  order_index.html
        │  page-pro2.html
        │  page.html
        │  passport.html
        │  paycenter.bak_1.html
        │  paycenter.bak_2.html
        │  paycenter.html
        │  preview.jpg
        │  theme-bak.xml
        │  theme.xml
        │
        ├─block
        │      footer.html
        │      header.html
        │
        ├─borders
        │      1pxGrayBorder.html
        │      border4.html
        │      border5.html
        │      border_b.html
        │      border_conergray.html
        │      border_darkblue.html
        │      border_gray.html
        │      border_lightblue.html
        │      border_lightgray.html
        │      border_lightgreen.html
        │      border_lightred.html
        │      border_orange.html
        │      border_y.html
        │      siderCommonBorder.html
        │      siderMainBorder_blue.html
        │      siderMainBorder_green.html
        │      siderMainBorder_red.html
        │      sider_ad.html
        │      sider_cat.html
        │      sider_tejia.html
        │
        └─images     样式文件,加载的js,图片
            │  site.js
            │  widget.css
            │
            ├─black
            │
            ├─...
            │
            └─purple
```
