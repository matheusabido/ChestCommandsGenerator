const items = ["apple.png","apple_golden.png","arrow.png","banner_base.png","banner_overlay.png","barrier.png","bed.png","beef_cooked.png","beef_raw.png","blaze_powder.png","blaze_rod.png","boat.png","bone.png","book_enchanted.png","book_normal.png","book_writable.png","book_written.png","bowl.png","bow_pulling_0.png","bow_pulling_1.png","bow_pulling_2.png","bow_standby.png","bread.png","brewing_stand.png","brick.png","bucket_empty.png","bucket_lava.png","bucket_milk.png","bucket_water.png","cake.png","carrot.png","carrot_golden.png","carrot_on_a_stick.png","cauldron.png","chainmail_boots.png","chainmail_chestplate.png","chainmail_helmet.png","chainmail_leggings.png","charcoal.png","chicken_cooked.png","chicken_raw.png","clay_ball.png","clock.png","clock.png.mcmeta","coal.png","comparator.png","compass.png","compass.png.mcmeta","cookie.png","diamond.png","diamond_axe.png","diamond_boots.png","diamond_chestplate.png","diamond_helmet.png","diamond_hoe.png","diamond_horse_armor.png","diamond_leggings.png","diamond_pickaxe.png","diamond_shovel.png","diamond_sword.png","door_acacia.png","door_birch.png","door_dark_oak.png","door_iron.png","door_jungle.png","door_spruce.png","door_wood.png","dye_powder_black.png","dye_powder_blue.png","dye_powder_brown.png","dye_powder_cyan.png","dye_powder_gray.png","dye_powder_green.png","dye_powder_light_blue.png","dye_powder_lime.png","dye_powder_magenta.png","dye_powder_orange.png","dye_powder_pink.png","dye_powder_purple.png","dye_powder_red.png","dye_powder_silver.png","dye_powder_white.png","dye_powder_yellow.png","egg.png","emerald.png","empty_armor_slot_boots.png","empty_armor_slot_chestplate.png","empty_armor_slot_helmet.png","empty_armor_slot_leggings.png","ender_eye.png","ender_pearl.png","experience_bottle.png","feather.png","fireball.png","fireworks.png","fireworks_charge.png","fireworks_charge_overlay.png","fishing_rod_cast.png","fishing_rod_uncast.png","fish_clownfish_raw.png","fish_cod_cooked.png","fish_cod_raw.png","fish_pufferfish_raw.png","fish_salmon_cooked.png","fish_salmon_raw.png","flint.png","flint_and_steel.png","flower_pot.png","ghast_tear.png","glowstone_dust.png","gold_axe.png","gold_boots.png","gold_chestplate.png","gold_helmet.png","gold_hoe.png","gold_horse_armor.png","gold_ingot.png","gold_leggings.png","gold_nugget.png","gold_pickaxe.png","gold_shovel.png","gold_sword.png","gunpowder.png","hopper.png","iron_axe.png","iron_boots.png","iron_chestplate.png","iron_helmet.png","iron_hoe.png","iron_horse_armor.png","iron_ingot.png","iron_leggings.png","iron_pickaxe.png","iron_shovel.png","iron_sword.png","item_frame.png","lead.png","leather.png","leather_boots.png","leather_boots_overlay.png","leather_chestplate.png","leather_chestplate_overlay.png","leather_helmet.png","leather_helmet_overlay.png","leather_leggings.png","leather_leggings_overlay.png","magma_cream.png","map_empty.png","map_filled.png","melon.png","melon_speckled.png","minecart_chest.png","minecart_command_block.png","minecart_furnace.png","minecart_hopper.png","minecart_normal.png","minecart_tnt.png","mushroom_stew.png","mutton_cooked.png","mutton_raw.png","name_tag.png","netherbrick.png","nether_star.png","nether_wart.png","painting.png","paper.png","porkchop_cooked.png","porkchop_raw.png","potato.png","potato_baked.png","potato_poisonous.png","potion_bottle_drinkable.png","potion_bottle_empty.png","potion_bottle_splash.png","potion_overlay.png","prismarine_crystals.png","prismarine_shard.png","pumpkin_pie.png","quartz.png","quiver.png","rabbit_cooked.png","rabbit_foot.png","rabbit_hide.png","rabbit_raw.png","rabbit_stew.png","record_11.png","record_13.png","record_blocks.png","record_cat.png","record_chirp.png","record_far.png","record_mall.png","record_mellohi.png","record_stal.png","record_strad.png","record_wait.png","record_ward.png","redstone_dust.png","reeds.png","repeater.png","rotten_flesh.png","ruby.png","saddle.png","seeds_melon.png","seeds_pumpkin.png","seeds_wheat.png","shears.png","sign.png","slimeball.png","snowball.png","spawn_egg.png","spawn_egg_overlay.png","spider_eye.png","spider_eye_fermented.png","stick.png","stone_axe.png","stone_hoe.png","stone_pickaxe.png","stone_shovel.png","stone_sword.png","string.png","sugar.png","wheat.png","wooden_armorstand.png","wood_axe.png","wood_hoe.png","wood_pickaxe.png","wood_shovel.png","wood_sword.png"];

function search(query) {
    let result = [];
    for (let item of items) {
        let name = item;
        while (name.includes('_')) name = name.replace('_', ' ');
        name = name.substring(0, name.length - 4);
        if (name.includes(query)) {
            result.push({'name': name, 'texture': item});
        }
    }
    return result;
}