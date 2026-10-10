import { useEffect } from "react";
import { SectionPage } from "./SectionPage";
import { useLocation } from "react-router";

export default function HomePage() {

  const location = useLocation();

  useEffect(() => {
    if(location.state?.flash){
      alert('Quay về thành công');
      window.history.replaceState({}, document.title);
    } 
  },[])

  return (
    <SectionPage title="THIS IS HOME PAGE !">
      eaque, ad mollitia a aut veniam eum. Quam obcaecati veniam nisi fugiat
      itaque aut aliquid perferendis sint. Id modi cumque consectetur totam
      placeat alias praesentium in nulla quas deserunt, voluptatibus quo tempore
      illum eum, voluptates aliquam ducimus? Rem quos perspiciatis soluta
      voluptatibus dolorem rerum at iure dolor. Repellendus laboriosam quidem
      reprehenderit at ipsam nulla corrupti, rem accusantium quos sed voluptatum
      nesciunt? Sit accusantium ea ipsa nihil facilis assumenda maxime incidunt
      placeat, aut quas omnis repudiandae nam labore. Ipsa nesciunt ratione
      eaque. Quisquam veritatis maxime, nam beatae commodi fugiat maiores,
      reprehenderit laborum asperiores, voluptas consequatur alias eaque eius
      et! Illum exercitationem reprehenderit reiciendis ad ratione eos aperiam
      eaque! Quod, cum aspernatur. Amet qui mollitia blanditiis voluptates ullam
      odit quo iusto quaerat ratione iure libero, harum laboriosam error
      nesciunt vel suscipit voluptate. Minima rerum consequuntur enim. Eos,
      officiis minus. Soluta repellat voluptate ab accusamus tempora vel,
      adipisci itaque, consequuntur nemo laboriosam porro amet qui aliquid
      voluptatibus minus ut sit? Incidunt, soluta sunt. Similique pariatur
      facilis, vero blanditiis hic porro? Inventore modi corrupti, placeat ipsum
      dolor sit error quis dolore maxime mollitia sint iure exercitationem
      beatae ex excepturi sed odit hic esse quasi ab unde nihil est! Possimus,
      est sequi! Impedit quam non voluptates eligendi aperiam culpa sed quaerat
      dolorum aut voluptatem distinctio quia praesentium maxime dolorem
      molestiae, optio similique magnam quos modi, nemo amet iste. Facere nobis
      voluptatem hic.
    </SectionPage>
  );
}
