const text = [
  "Frank knew there was a correct time and place to reveal his secret and this wasn't it. The issue was that the secret might be revealed despite his best attempt to keep it from coming out. At this point, it was out of his control and completely dependant on those around him who also knew the secret. They wouldn't purposely reveal it, or at least he believed that, but they could easily inadvertently expose it. It was going to be a long hour as he nervously eyed everyone around the table hoping they would keep their mouths shut.",
  "I'm meant to be writing at this moment. What I mean is, I'm meant to be writing something else at this moment. The document I'm meant to be writing is, of course, open in another program on my computer and is patiently awaiting my attention. Yet here I am plonking down senseless sentiments in this paragraph because it's easier to do than to work on anything particularly meaningful. I am grateful for the distraction.",
  "What if dogs were racist? Would they care about fur color….. “son, only play with other tan dogs”? Or maybe it would depend on breed, “honey, only play with other German Shepards, never poodles”. Better yet it could depend on occupation. “I’m a sled dog while you’re only a running companion, leave me alone”. Maybe the neighborhood they live in could be the way they choose which dogs to associate with and which to shun? Size could be the determining factor, “see how tall that dog is, they are probably dumb”. Luckily dogs don’t discriminate. Just watch at a dog park. Big black and white dogs wag their tails and play with tiny tan dogs. A service dog chases after the same ball as the off-duty police dog. So if dogs don’t discriminate then why do we?",
  "It's always good to bring a slower friend with you on a hike. If you happen to come across bears, the whole group doesn't have to worry. Only the slowest in the group do. That was the lesson they were about to learn that day.",
  "Spending time at national parks can be an exciting adventure, but this wasn't the type of excitement she was hoping to experience. As she contemplated the situation she found herself in, she knew she'd gotten herself in a little more than she bargained for. It wasn't often that she found herself in a tree staring down at a pack of wolves that were looking to make her their next meal.",
  "It was supposed to be a dream vacation. They had planned it over a year in advance so that it would be perfect in every way. It had been what they had been looking forward to through all the turmoil and negativity around them. It had been the light at the end of both their tunnels. Now that the dream vacation was only a week away, the virus had stopped all air travel.",
  "He heard the crack echo in the late afternoon about a mile away. His heart started racing and he bolted into a full sprint. It wasn't a gunshot, it wasn't a gunshot, he repeated under his breathlessness as he continued to sprint.",
  "The boy walked down the street in a carefree way, playing without notice of what was about him. He didn't hear the sound of the car as his ball careened into the road. He took a step toward it, and in doing so sealed his fate.",
  "He stared out the window at the snowy field. He'd been stuck in the house for close to a month and his only view of the outside world was through the window. There wasn't much to see. It was mostly just the field with an occasional bird or small animal who ventured into the field. As he continued to stare out the window, he wondered how much longer he'd be shackled to the steel bar inside the house.",
];

const inputNum = document.getElementById("inputNum");
const generateBtn = document.getElementById("generateBtn");
const paragraphs = document.getElementById("paragraphs");

generateBtn.addEventListener("click", () => {
  let input = inputNum.value;
  let randomIndex = Math.floor(Math.random() * 10);
  paragraphs.innerHTML = ``;
  if (input < 0 || input > 9) {
    paragraphs.innerHTML = `<p> ${text[randomIndex]}`;
  } else {
    while (input != 0) {
      randomIndex = (randomIndex + 1) % 9;
      paragraphs.innerHTML += `<p> ${text[randomIndex]}`;
      input--;
    }
  }
});
