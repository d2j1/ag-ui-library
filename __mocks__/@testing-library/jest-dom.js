// Mock implementation for jest-dom

// Add toHaveClass matcher
expect.extend({
  toHaveClass(received, className) {
    const pass = received && received.className && 
                 received.className.split(' ').includes(className);
    
    return {
      message: () => pass 
        ? `Expected element not to have class "${className}"`
        : `Expected element to have class "${className}"`,
      pass
    };
  },
  
  toHaveStyle(received, styleProperty) {
    const styleKey = Object.keys(styleProperty)[0];
    const styleValue = styleProperty[styleKey];
    const pass = received && 
                 received.style && 
                 received.style[styleKey] === styleValue;
    
    return {
      message: () => pass
        ? `Expected element not to have style "${styleKey}: ${styleValue}"`
        : `Expected element to have style "${styleKey}: ${styleValue}"`,
      pass
    };
  },
  
  toBeInTheDocument(received) {
    const pass = received !== null && received !== undefined;
    
    return {
      message: () => pass
        ? `Expected element not to be in the document`
        : `Expected element to be in the document`,
      pass
    };
  }
});
