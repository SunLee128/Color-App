import chroma from 'chroma-js';
const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

function generatePalette (starterPalette) {
  const newPalette = {
    paletteName: starterPalette.paletteName,
    id: starterPalette.id,
    emoji: starterPalette.emoji,
    colors: {}
  };
  for (const level of levels) {
    newPalette.colors[level] = [];
  }
  // generate scale of colors and convert them to different types
  for (const color of starterPalette.colors) {
    const scale = getScale(color.color, 10).reverse();
    for (const i in scale) {
      newPalette.colors[levels[i]].push({
        name: `${color.name} ${levels[i]}`,
        id: color.name.toLowerCase().replace(/ /g, '-'), // replace space with '-'
        hex: scale[i],
        rgb: chroma(scale[i]).css(),
        rgba: chroma(scale[i])
          .css()
          .replace('rgba', 'rgba')
          .replace(')', ',1.0)')
      });
    }
  }
  return newPalette;
}

function getRange (hexColor) {
  const end = '#fff';
  return [
    chroma(hexColor)
      .darken(1.4)
      .hex(),
    hexColor,
    end
  ];
}

function getScale (hexColor, numberOfColors) {
  return chroma
    .scale(getRange(hexColor)) // create scale
    .mode('lab')
    .colors(numberOfColors);
}

export { generatePalette };
