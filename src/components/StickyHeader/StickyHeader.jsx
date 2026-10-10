import { useEffect, useRef, useState } from "react";

export default function StickyHeader() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const eventScrollY = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY > 100 && currentScrollY > lastScrollY)
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", eventScrollY);
    return () => window.removeEventListener("scroll", eventScrollY);
  }, []);

  return (
    <div className="flex flex-col relative">
      <nav
        className={`flex justify-between items-center bg-white py-4 px-3 rounded-md shadow-sm fixed transition-all duration-150  min-w-310 right-7 ${isVisible ? "-top-20" : "top-5"}`}
      >
        <div className="font-black tracking-tight text-2xl">STICKY HEADER</div>
        <ul className="flex gap-5 text-sm">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="banner flex flex-col gap-4 items-center justify-center h-100 over">
        <h1 className="text-6xl font-bold tracking-tight mt-200">
          WHAT IS STICKY HEADER ?
        </h1>
        <p className="text-sm text-justify px-4 mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, in recusandae repellat nemo ullam soluta minus harum cumque velit quas molestiae, mollitia nesciunt, quisquam praesentium natus corrupti quam eaque beatae.
          Eligendi officia corrupti veritatis. Dolor mollitia ipsum nam aut animi, cupiditate asperiores est temporibus, deleniti voluptatem ab pariatur veniam quidem, perspiciatis minus nostrum. Hic, beatae quidem voluptates expedita officia cum.
          Ratione delectus nihil laudantium assumenda reiciendis animi excepturi quibusdam modi numquam incidunt, quisquam ea eum maiores voluptatem vero temporibus? Totam aliquam explicabo qui reprehenderit voluptatem debitis exercitationem impedit, magnam nulla?
          Temporibus tenetur optio minima sequi atque provident. Libero ut quas quidem, consequatur doloremque voluptatibus porro nesciunt nostrum velit ipsum qui quisquam, iusto reprehenderit nisi, cupiditate modi numquam? Similique, iste ex?
          Aliquid magni officiis perferendis cum a quia praesentium ab consequuntur ducimus reprehenderit? Commodi, placeat cumque nam, labore facilis temporibus error sit nemo nesciunt in similique eos vero unde iure modi!
          Sequi, tempora. Suscipit amet mollitia et, odio beatae consectetur similique esse necessitatibus laboriosam nemo maxime dolor! Nobis, ex eos laudantium incidunt provident odit minus veniam, hic dignissimos fugit nam blanditiis?
          Ratione quam numquam a. Fuga quia non similique, alias culpa impedit officia, quo placeat minima quae, expedita nisi quod beatae voluptatibus? Animi modi nihil recusandae, debitis harum praesentium natus qui.
          Aut sit, pariatur quibusdam aspernatur quis eum et eveniet neque sapiente enim animi odio suscipit dolores velit optio inventore laborum beatae omnis reiciendis vero. Tempore dolore eos delectus porro excepturi.
          Error saepe temporibus sapiente? Numquam nemo doloremque nobis reiciendis vel sequi iusto explicabo fuga iure fugiat qui labore maiores rem laudantium, adipisci odio, dolor nihil laboriosam hic porro ex mollitia.
          Animi consectetur cumque amet aliquid, accusantium expedita. Nostrum, voluptates cum incidunt inventore eaque laudantium beatae explicabo tempore, esse veniam, nam consequuntur et praesentium earum soluta quidem. Nihil fuga laborum odit!
          Quos nulla voluptatem totam explicabo magnam tenetur cumque facere laboriosam laudantium repudiandae, cupiditate quisquam praesentium exercitationem ut nostrum dolor earum eaque ullam dicta tempore velit! Delectus ipsa porro quas explicabo!
          Dolor ut dolores amet obcaecati reiciendis qui accusantium animi aperiam similique, nulla illum possimus cumque at. Enim blanditiis quidem, magnam perspiciatis corrupti voluptatibus minus amet doloremque dolores id, itaque deleniti.
          Dolore fugit quaerat consequuntur amet incidunt rem magnam facilis! Laudantium nulla sunt deleniti sequi ex quisquam sapiente maiores magni expedita beatae tempore asperiores nostrum unde consequatur ab, vel cupiditate consectetur.
          Sint aperiam dolorum assumenda sequi sit explicabo, quas harum dolores! Commodi, doloremque! Rem ea quasi non sint hic, harum earum quidem et nostrum labore consequatur, qui dolor provident dolore culpa?
          Quis dicta natus labore quod laborum iste ex neque corporis unde ad quae eaque adipisci, distinctio voluptatem quia asperiores voluptas. Ratione architecto voluptatem error corrupti tempore! Accusamus recusandae asperiores ex?
          Dolor commodi magni praesentium sapiente laborum veniam accusantium minus quaerat tempora. Quisquam alias voluptate distinctio nostrum libero, debitis sapiente nesciunt, odit aliquam rem quos! Voluptas consequuntur nam laboriosam voluptatibus pariatur.
          Modi, et facere soluta ipsam enim quos quis impedit voluptatibus natus esse nihil? Aspernatur cumque debitis minus rem. Ipsa reiciendis ea consequatur aliquid ab illo unde nulla rem non maxime.
          Enim quibusdam illo sunt fugiat dolorum ex iusto assumenda, voluptate vitae laborum unde, repellat, reprehenderit sequi quaerat! Praesentium quo aut veritatis, perferendis voluptas, voluptates, ex illo labore neque in expedita.
          Earum, perspiciatis ab. Et nulla quisquam expedita dolor cumque, voluptatibus facilis suscipit provident quia, porro corrupti quo eius dicta ad veniam explicabo debitis quasi eligendi nemo maxime! Sed, voluptas magnam.
          Ratione id ipsa est esse repellendus laborum, odit neque dignissimos. Ea quibusdam odit nam et iste, rerum enim nulla officia cupiditate suscipit repudiandae incidunt, sequi optio cum amet nihil esse.
           Dolore fugit quaerat consequuntur amet incidunt rem magnam facilis! Laudantium nulla sunt deleniti sequi ex quisquam sapiente maiores magni expedita beatae tempore asperiores nostrum unde consequatur ab, vel cupiditate consectetur.
          Sint aperiam dolorum assumenda sequi sit explicabo, quas harum dolores! Commodi, doloremque! Rem ea quasi non sint hic, harum earum quidem et nostrum labore consequatur, qui dolor provident dolore culpa?
          Quis dicta natus labore quod laborum iste ex neque corporis unde ad quae eaque adipisci, distinctio voluptatem quia asperiores voluptas. Ratione architecto voluptatem error corrupti tempore! Accusamus recusandae asperiores ex?
          Dolor commodi magni praesentium sapiente laborum veniam accusantium minus quaerat tempora. Quisquam alias voluptate distinctio nostrum libero, debitis sapiente nesciunt, odit aliquam rem quos! Voluptas consequuntur nam laboriosam voluptatibus pariatur.
          Modi, et facere soluta ipsam enim quos quis impedit voluptatibus natus esse nihil? Aspernatur cumque debitis minus rem. Ipsa reiciendis ea consequatur aliquid ab illo unde nulla rem non maxime.
          Enim quibusdam illo sunt fugiat dolorum ex iusto assumenda, voluptate vitae laborum unde, repellat, reprehenderit sequi quaerat! Praesentium quo aut veritatis, perferendis voluptas, voluptates, ex illo labore neque in expedita.
          Earum, perspiciatis ab. Et nulla quisquam expedita dolor cumque, voluptatibus facilis suscipit provident quia, porro corrupti quo eius dicta ad veniam explicabo debitis quasi eligendi nemo maxime! Sed, voluptas magnam.
          Ratione id ipsa est esse repellendus laborum, odit neque dignissimos. Ea quibusdam odit nam et iste, rerum enim nulla officia cupiditate suscipit repudiandae incidunt, sequi optio cum amet nihil esse.
           Dolore fugit quaerat consequuntur amet incidunt rem magnam facilis! Laudantium nulla sunt deleniti sequi ex quisquam sapiente maiores magni expedita beatae tempore asperiores nostrum unde consequatur ab, vel cupiditate consectetur.
          Sint aperiam dolorum assumenda sequi sit explicabo, quas harum dolores! Commodi, doloremque! Rem ea quasi non sint hic, harum earum quidem et nostrum labore consequatur, qui dolor provident dolore culpa?
          Quis dicta natus labore quod laborum iste ex neque corporis unde ad quae eaque adipisci, distinctio voluptatem quia asperiores voluptas. Ratione architecto voluptatem error corrupti tempore! Accusamus recusandae asperiores ex?
          Dolor commodi magni praesentium sapiente laborum veniam accusantium minus quaerat tempora. Quisquam alias voluptate distinctio nostrum libero, debitis sapiente nesciunt, odit aliquam rem quos! Voluptas consequuntur nam laboriosam voluptatibus pariatur.
          Modi, et facere soluta ipsam enim quos quis impedit voluptatibus natus esse nihil? Aspernatur cumque debitis minus rem. Ipsa reiciendis ea consequatur aliquid ab illo unde nulla rem non maxime.
          Enim quibusdam illo sunt fugiat dolorum ex iusto assumenda, voluptate vitae laborum unde, repellat, reprehenderit sequi quaerat! Praesentium quo aut veritatis, perferendis voluptas, voluptates, ex illo labore neque in expedita.
          Earum, perspiciatis ab. Et nulla quisquam expedita dolor cumque, voluptatibus facilis suscipit provident quia, porro corrupti quo eius dicta ad veniam explicabo debitis quasi eligendi nemo maxime! Sed, voluptas magnam.
          Ratione id ipsa est esse repellendus laborum, odit neque dignissimos. Ea quibusdam odit nam et iste, rerum enim nulla officia cupiditate suscipit repudiandae incidunt, sequi optio cum amet nihil esse.
        </p>
      </section>
    </div>
  );
}
