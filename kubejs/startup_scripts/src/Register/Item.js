StartupEvents.registry('item', event => {

    // 批量注册构件
    global.MechanismTypes.forEach((mechanism) => {
        event.create(`${mechanism}_mechanism`)
            .texture(`kubejs:item/mechanism/complete/${mechanism}`)
        event.create(`incomplete_${mechanism}_mechanism`)
            .texture(`kubejs:item/mechanism/incomplete/${mechanism}`)
    })

    event.create('shimmerstone_gem_shard') // 火花石碎片
    event.create('shimmerstone_gem_lump') // 火花石碎块

    event.create('paltaeria_catalyst') // 苍绿催化剂
    event.create('stratine_catalyst') // 绯红催化剂
    event.create('hover_catalyst') // 悬浮催化剂
    event.create('gravity_catalyst') // 重力催化剂

    event.create('rubber') // 橡胶

    event.create('litematica_tool') // 投影工具

    event.create('adulterated_compound_base')
    event.create('incomplete_chromatic_compound')
    event.create('chromatic_compound_shard')
    event.create('unstable_chromatic_compound')

    event.create("ore_feed") // 矿石饲料
})