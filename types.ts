
import type React from 'react';

export interface Tool {
    id: string;
    name: string;
    Icon: React.FC<React.SVGProps<SVGSVGElement>>;
    description: string;
    component: React.FC<{ showToast: (message: string) => void }>;
    category: string;
}
