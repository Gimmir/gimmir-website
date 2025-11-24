export interface SimulatorOption {
  id: string;
  label: string;
  sub: string;
  multiplier: number;
  model?: string;
  risk?: string;
}

export interface SimulatorStep {
  id: string;
  question: string;
  options: SimulatorOption[];
}

export interface SimulatorResult {
  range: string;
  model: string;
  risks: string[];
}

export interface SimulatorSelections {
  [key: string]: SimulatorOption;
}

export interface NavLink {
  title: string;
  href?: string;
  items?: {
    name: string;
    href: string;
  }[];
}
