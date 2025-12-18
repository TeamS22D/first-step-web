import React, { useState, useRef, useEffect } from 'react';
import {Type} from "lucide-react";
import * as S from './Dropdown.style.ts'

interface DropdownProps {
  options: string[];
  initialSelected?: string;
  onSelect?: (value: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, initialSelected, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(initialSelected || options[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  /* 외부 클릭 시 닫기 */
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleDropdown = () => setIsOpen(prev => !prev);

  const handleSelect = (option: string) => {
    setSelected(option);
    setIsOpen(false);
    onSelect?.(option);
  };

  return (
    <S.DropdownContainer ref={dropdownRef}>
      <S.DropdownHeader
        onClick={toggleDropdown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {isOpen ? <Type style={{color: '#2F7247'}}/> : <Type style={{color: '#2F7247'}}/>}
      </S.DropdownHeader>
      {isOpen && (
        <S.DropdownList role="listbox" tabIndex={-1}>
          {options.map(option => (
            <S.DropdownItem
              key={option}
              onClick={() => handleSelect(option)}
              role="option"
              aria-selected={selected === option}
            >
              {option}
            </S.DropdownItem>
          ))}
        </S.DropdownList>
      )}
    </S.DropdownContainer>
  );
};

export default Dropdown;
