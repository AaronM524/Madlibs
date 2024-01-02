let adjective = prompt('Enter an adjective:')
let noun = prompt ('Enter a noun:')
let verb = prompt ('Enter a verb:')
let adverb = prompt ('Enter a adverb:')

let story = `Once upon a frosty morning, in a ${adjective} ${noun}, a group of friends decided to ${verb} through the ${noun} ${adverb}. The air was crisp, and the ground was covered in a sparkling blanket of snow. As they ${verb} along, they spotted a cozy ${adjective} cabin nestled in the woods. Inside, a warm fire was roaring, and they spent the rest of the day sipping hot cocoa and sharing stories of their winter adventures. The night fell, and the snow continued to ${verb} outside, creating a magical scene that made their winter truly unforgettable.`;



let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`