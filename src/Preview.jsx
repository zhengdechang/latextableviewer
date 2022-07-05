import { XeTeXEngine } from "./XeTeXEngine";

const engine = new XeTeXEngine();

export const Preview = () => {
  const init = async () => {
    console.log(engine);
    await engine.loadEngine();
  }

  return (
    <article className="flex flex-col items-left">
      <div>
      <button onClick={init}>Compile</button><button>Download</button>
      </div>
      <p className="border border-black">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet lectus proin nibh nisl condimentum id venenatis. Nisl purus in mollis nunc sed id semper risus in. Dui accumsan sit amet nulla facilisi morbi tempus iaculis urna. Massa tincidunt dui ut ornare lectus sit amet. Habitasse platea dictumst quisque sagittis purus sit. Duis at tellus at urna condimentum. Duis convallis convallis tellus id. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Nibh sit amet commodo nulla facilisi. Egestas congue quisque egestas diam in arcu cursus euismod. Consequat mauris nunc congue nisi vitae suscipit tellus. Amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus. Semper feugiat nibh sed pulvinar proin gravida hendrerit. Ornare quam viverra orci sagittis eu. Ornare arcu odio ut sem nulla pharetra diam. Ac feugiat sed lectus vestibulum mattis ullamcorper. Pretium aenean pharetra magna ac placerat.

Magna fringilla urna porttitor rhoncus dolor purus non enim praesent. Egestas tellus rutrum tellus pellentesque eu. Congue eu consequat ac felis donec et odio pellentesque diam. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Sit amet purus gravida quis blandit turpis cursus in hac. Malesuada bibendum arcu vitae elementum. Eget mauris pharetra et ultrices neque ornare. Mauris vitae ultricies leo integer malesuada nunc vel risus. Aliquet nec ullamcorper sit amet risus nullam eget felis. Maecenas sed enim ut sem viverra aliquet. In nibh mauris cursus mattis molestie a iaculis at. Odio aenean sed adipiscing diam donec adipiscing tristique risus nec. Elementum eu facilisis sed odio morbi quis commodo. Mi proin sed libero enim sed. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus.

Dictum varius duis at consectetur lorem donec. Magna etiam tempor orci eu. Mattis vulputate enim nulla aliquet porttitor lacus luctus accumsan tortor. At tellus at urna condimentum mattis pellentesque. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Massa sed elementum tempus egestas. Amet nisl suscipit adipiscing bibendum. Massa placerat duis ultricies lacus sed turpis tincidunt. Nec dui nunc mattis enim. Vel facilisis volutpat est velit egestas dui id ornare. Consequat interdum varius sit amet mattis vulputate. Auctor elit sed vulputate mi sit amet mauris commodo. Est ullamcorper eget nulla facilisi etiam dignissim diam quis. Amet massa vitae tortor condimentum lacinia. Massa tempor nec feugiat nisl. Fames ac turpis egestas sed tempus urna et pharetra pharetra. Nec ultrices dui sapien eget. Risus pretium quam vulputate dignissim suspendisse. Purus sit amet volutpat consequat mauris nunc congue nisi vitae.

Nec ultrices dui sapien eget mi proin sed libero enim. Amet mauris commodo quis imperdiet massa tincidunt nunc pulvinar. Amet nulla facilisi morbi tempus iaculis urna id. Dui id ornare arcu odio ut sem. Mattis aliquam faucibus purus in. Et tortor at risus viverra adipiscing at in tellus integer. Odio pellentesque diam volutpat commodo sed. Tincidunt augue interdum velit euismod. Mattis enim ut tellus elementum sagittis vitae. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Risus nec feugiat in fermentum. Leo integer malesuada nunc vel risus. Id aliquet risus feugiat in ante metus dictum at tempor.

Ligula ullamcorper malesuada proin libero nunc consequat interdum. Ultricies lacus sed turpis tincidunt id aliquet risus. Commodo quis imperdiet massa tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu. Purus non enim praesent elementum facilisis leo vel fringilla. Suscipit adipiscing bibendum est ultricies integer quis auctor. Quis imperdiet massa tincidunt nunc pulvinar. Vel quam elementum pulvinar etiam non quam. Felis eget nunc lobortis mattis aliquam faucibus purus in. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Curabitur gravida arcu ac tortor dignissim. Est ante in nibh mauris cursus mattis molestie a iaculis. Habitasse platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Vitae congue eu consequat ac felis donec et odio.
      </p>
    </article>
  )
}