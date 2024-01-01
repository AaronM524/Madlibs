let adjective = prompt('Enter an adjective:')
let noun = prompt ('Enter a noun:')
let verb = prompt ('Enter a verb:')
let adverb = prompt ('Enter a adverb:')

let story = `Once upon a frosty winter evening, in a ${adjective} ${noun}, a group of friends decided to ${verb} down the snowy hills. They giggled and cheered as they made their way, ${adverb} ${verb} through the glistening snow.`;

let madLibOutputDiv = document.getElementById('madLibOutput');

madLibOutputDiv.innerHTML = `<p>${story}</p>`