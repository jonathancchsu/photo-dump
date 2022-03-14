'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
      user_id: 1,
      photo_id: 10,
      comments: 'Corrupti natus quasi voluptatem blanditiis culpa.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Explicabo et alias laudantium cupiditate nobis odio possimus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 10,
      comments: 'Sed maxime autem.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 2,
      comments: 'Quia est laudantium rerum ut quia itaque quia.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 1,
      comments: 'Voluptas doloremque soluta.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 6,
      comments: 'Id hic eius dicta voluptatum doloribus omnis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 3,
      comments: 'Reprehenderit dolorem corporis accusamus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 1,
      comments: 'Enim necessitatibus sed ea eligendi autem totam inventore.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 7,
      comments: 'Cumque quasi molestiae sequi doloribus quo asperiores dolorem voluptatem.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 7,
      comments: 'Magnam voluptas facilis ut eos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Quos illo nemo magnam pariatur nihil sed eaque beatae.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 4,
      comments: 'Sed placeat voluptate totam eos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 2,
      comments: 'Sit dolorem ratione laudantium facere velit quod hic eum dolores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 7,
      comments: 'Itaque ipsam aut et hic doloremque tempora quod id.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 10,
      comments: 'Recusandae aut tempora explicabo rerum aspernatur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 8,
      comments: 'Delectus corrupti eum vel.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 6,
      comments: 'Eos fugit possimus ut dolor quia perspiciatis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 6,
      comments: 'Impedit voluptatem doloribus voluptates libero quia placeat molestiae.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 9,
      comments: 'Recusandae enim quo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Magnam nulla quae pariatur ducimus blanditiis ut.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 6,
      comments: 'Ut occaecati repellendus est et alias ut reprehenderit exercitationem.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Eum voluptate libero quis possimus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 5,
      comments: 'Facilis repudiandae repellendus ad nihil.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 2,
      comments: 'Pariatur impedit ut eligendi quo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 3,
      comments: 'Eos voluptatem iste aperiam consectetur nostrum fuga ullam.', createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 1,
      comments: 'In dignissimos suscipit temporibus quo minus beatae delectus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 1,
      comments: 'Veritatis nisi facere repudiandae.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 8,
      comments: 'Quia est dolores beatae dolor neque nulla ut fuga dolorum.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 1,
      comments: 'Illo reiciendis et quaerat.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 2,
      comments: 'Ullam et quasi sit consectetur sequi quia esse et dignissimos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 6,
      comments: 'Voluptatem perferendis quod amet mollitia voluptatem.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 5,
      comments: 'Consequatur cum cupiditate vero dolores vel ratione.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 5,
      comments: 'In blanditiis ratione.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 3,
      comments: 'Doloremque et doloribus commodi dolores eveniet ratione ut fuga.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 6,
      comments: 'In repellendus libero.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 2,
      comments: 'Et odit accusantium ut rerum ea fugiat consequatur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 1,
      comments: 'Maxime ratione et sint commodi ut nihil.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 8,
      comments: 'Sint fugiat corporis autem at ipsam ad in tempora cupiditate.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 2,
      comments: 'Assumenda corporis culpa necessitatibus quas iste dolor sunt.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Officiis vel ipsum qui eius neque suscipit.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 3,
      comments: 'Possimus veritatis tempora sequi.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 5,
      comments: 'Et voluptas exercitationem corrupti esse aliquam qui possimus labore.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 3,
      comments: 'Sed eaque odit maxime aut libero quibusdam incidunt cum consequatur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 2,
      comments: 'Praesentium aspernatur ratione quis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 3,
      comments: 'Dolorum eos ut aspernatur accusamus qui.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 9,
      comments: 'Et non id commodi quae quisquam maiores.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 2,
      comments: 'Deleniti et voluptatibus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Odit excepturi quis aperiam consequuntur voluptas optio voluptas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 3,
      comments: 'Deleniti necessitatibus doloremque eveniet reprehenderit similique odio labore.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 6,
      comments: 'Rem rerum dolores atque modi nam veniam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 2,
      comments: 'Harum rerum fugit.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 6,
      comments: 'Ab aliquid perspiciatis adipisci voluptatibus est.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Repellendus aut qui consequatur officia repellendus in alias rerum at.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 7,
      comments: 'Repudiandae et dignissimos nemo repellendus ratione.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 9,
      comments: 'Saepe libero blanditiis in aspernatur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 1,
      comments: 'Est non ea quia labore qui rerum est sit.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 8,
      comments: 'Ducimus rerum omnis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 2,
      comments: 'Ut non optio ullam totam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 5,
      comments: 'Aut inventore natus ea officia suscipit voluptate id dolorem nihil.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 6,
      comments: 'Pariatur porro sed quos quis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 2,
      comments: 'Rerum natus qui sit tempora eius dignissimos.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 1,
      comments: 'Repellat earum non.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 2,
      comments: 'Odio porro corporis voluptas sunt quo eveniet laboriosam cum.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 2,
      comments: 'Non quia aut impedit.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Id hic eaque alias quod eum.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Voluptatem ea vitae fugiat laboriosam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 2,
      comments: 'Magni rerum sed perspiciatis sunt quis voluptatem animi quibusdam magni.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Provident expedita magnam et vero beatae laboriosam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Reprehenderit nostrum saepe nam non itaque dolorem.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 8,
      comments: 'Est non recusandae consequuntur et.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 10,
      comments: 'Magnam voluptatem et sint blanditiis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 9,
      comments: 'Iste voluptatem quasi et harum voluptatem et occaecati.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 1,
      comments: 'Sint ut et saepe asperiores omnis sint nihil.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Unde animi ab alias voluptatibus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 2,
      comments: 'Aut ex ut quis ullam accusantium.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 9,
      comments: 'Eum inventore suscipit fuga iusto harum optio autem magni eaque.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 4,
      comments: 'Dicta sint totam sit natus est.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 7,
      comments: 'Assumenda et unde ut quidem veniam maxime.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 1,
      comments: 'Eum provident quaerat quasi qui.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 9,
      comments: 'A harum quis placeat.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 10,
      comments: 'Officiis vero qui dolor iure sequi.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 6,
      comments: 'Sed est repellat quo.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Debitis dicta qui deserunt molestiae laboriosam est.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 6,
      comments: 'Voluptas unde aliquid repellendus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 8,
      comments: 'Molestiae harum quidem totam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Quisquam ad voluptatem sed quibusdam possimus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 8,
      comments: 'Sequi et soluta ea iure.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 6,
      comments: 'Minima officiis consectetur eos rerum nobis velit corrupti dolor deleniti.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 4,
      comments: 'Delectus aut atque nam ipsum deserunt fugit ipsa.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 7,
      comments: 'Nesciunt est soluta sunt.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 6,
      comments: 'Praesentium facere fugit eligendi culpa dolorem possimus et est.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Soluta nemo deleniti necessitatibus.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 10,
      comments: 'Magni blanditiis eaque necessitatibus ut earum pariatur.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 1,
      comments: 'In delectus dolor magnam earum adipisci quia eius excepturi.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 9,
      comments: 'Beatae mollitia iusto sed nulla laboriosam et totam architecto.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 3,
      comments: 'Harum eum error voluptas.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 2,
      photo_id: 9,
      comments: 'Corrupti quam vitae eveniet omnis ullam.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 3,
      photo_id: 5,
      comments: 'Occaecati voluptatem non dolore expedita nobis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 8,
      comments: 'Omnis ut quasi aut debitis.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      user_id: 1,
      photo_id: 7,
      comments: 'Quasi aspernatur saepe natus illo.',
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
