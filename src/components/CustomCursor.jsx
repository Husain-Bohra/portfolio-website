import { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    
    const updateCursorType = () => {
      const target = document.elementFromPoint(position.x, position.y);
      
      // Check if the element or its parent has the interactive class or is a button/a tag
      const isInteractive = 
        target?.classList.contains('interactive') ||
        target?.closest('.interactive') ||
        target?.tagName === 'BUTTON' ||
        target?.tagName === 'A' ||
        target?.closest('button') ||
        target?.closest('a');
      
      setIsPointer(isInteractive);
    };
    
    const handleMouseEnter = () => setIsHidden(false);
    const handleMouseLeave = () => setIsHidden(true);
    const handleMouseDown = () => setIsActive(true);
    const handleMouseUp = () => setIsActive(false);
    
    document.addEventListener('mousemove', updateCursorPosition);
    document.addEventListener('mousemove', updateCursorType);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Hide default cursor
    document.body.classList.add('cursor-none');
    
    return () => {
      document.removeEventListener('mousemove', updateCursorPosition);
      document.removeEventListener('mousemove', updateCursorType);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Restore default cursor
      document.body.classList.remove('cursor-none');
    };
  }, [position]);

  return (
    <>
      <div 
        className={`fixed pointer-events-none z-50 rounded-full bg-primary mix-blend-difference transition-transform duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } ${isActive ? 'scale-75' : 'scale-100'}`}
        style={{
          width: isPointer ? '40px' : '20px',
          height: isPointer ? '40px' : '20px',
          left: position.x - (isPointer ? 20 : 10),
          top: position.y - (isPointer ? 20 : 10),
          transform: `translate(0, 0) scale(${isPointer ? 1.5 : 1})`,
          transition: 'width 0.2s, height 0.2s, transform 0.2s, opacity 0.2s'
        }}
      ></div>
      <style jsx global>{`
        body.cursor-none, 
        body.cursor-none * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
};

export default CustomCursor; 