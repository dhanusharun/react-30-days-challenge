function increaseSaturation(hexCode, amount) {
    // Remove the '#' symbol if present
    hexCode = hexCode.replace('#', '');
  
    // Convert the hex code to RGB
    const red = parseInt(hexCode.substring(0, 2), 16);
    const green = parseInt(hexCode.substring(2, 4), 16);
    const blue = parseInt(hexCode.substring(4, 6), 16);
  
    // Convert RGB to HSL
    let hsl = rgbToHsl(red, green, blue);
  
    // Increase the saturation
    hsl[1] = Math.min(1, hsl[1] + amount);
  
    // Convert HSL back to RGB
    const rgb = hslToRgb(hsl[0], hsl[1], hsl[2]);
  
    // Convert RGB to hex code
    const newHexCode = rgbToHex(rgb[0], rgb[1], rgb[2]);
  
    return newHexCode;
  }
  
  // Helper functions
  
  function rgbToHsl(red, green, blue) {
    red /= 255;
    green /= 255;
    blue /= 255;
  
    const max = Math.max(red, green, blue);
    const min = Math.min(red, green, blue);
    let h, s, l = (max + min) / 2;
  
    if (max === min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case red:
          h = (green - blue) / d + (green < blue ? 6 : 0);
          break;
        case green:
          h = (blue - red) / d + 2;
          break;
        case blue:
          h = (red - green) / d + 4;
          break;
      }
      h /= 6;
    }
  
    return [h, s, l];
  }
  
  function hslToRgb(h, s, l) {
    let r, g, b;
  
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      const hue2rgb = (p, q, t) => {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      };
  
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
  
    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
  }
  
  function rgbToHex(red, green, blue) {
    return (
      '#' +
      [red, green, blue]
        .map((value) => {
          const hex = value.toString(16);
          return hex.length === 1 ? '0' + hex : hex;
        })
        .join('')
    );
  }

export default increaseSaturation;