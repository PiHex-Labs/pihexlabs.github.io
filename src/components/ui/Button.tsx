import React from 'react';
import { ArrowRight } from 'lucide-react';
import { theme } from '../../theme';

interface ButtonProps {
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: boolean;
  type?: 'button' | 'submit';
}

export function Button({ variant = 'primary', children, icon = false, type = 'button' }: ButtonProps) {
  const baseStyles = "px-8 py-3 rounded-md font-medium transition-all duration-200";
  const variants = {
    primary: `bg-black dark:bg-white text-white dark:text-black hover:bg-[${theme.colors.primaryHover}] dark:hover:bg-gray-200`,
    secondary: "border-2 border-black dark:border-white text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5"
  };

  return (
    <button type={type} className={`${baseStyles} ${variants[variant]} flex items-center`}>
      {children}
      {icon && <ArrowRight className="ml-2 h-5 w-5" />}
    </button>
  );
}