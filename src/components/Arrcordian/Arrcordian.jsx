import { useEffect, useRef, useState } from "react";
import { BaseLayout } from "../layouts/BaseLayout";
import { ChevronDown } from "lucide-react";

const Panel = ({ title, children, onToggle, isOpen }) => {
  return (
    <div className="border p-4 rounded-xl border-gray-300 bg-white shadow-sm">
      <div
        onClick={onToggle}
        className="flex justify-between items-center cursor-pointer"
      >
        <h1>{title}</h1>
        <ChevronDown size={18} />
      </div>
      {isOpen && <p className="mt-2 text-gray-500 text-sm">{children}</p>}
    </div>
  );
};

export default function Arrcordian() {
  const [index, setIndex] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    panelRef.current = 0
  }, []);

  return (
    <BaseLayout title="ARRCORDIAN">
      
      <div className="flex flex-col gap-2 mt-10">
        <Panel
          onToggle={() => setIndex(0)}
          isOpen={index == null ? panelRef : index == 0}
          title="React là gì ?"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          quo cumque, aliquid corporis praesentium eligendi nulla illo numquam
          odit voluptatum!
        </Panel>

        <Panel
          onToggle={() => setIndex(1)}
          isOpen={index == 1}
          title="State trong React là gì ?"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          quo cumque, aliquid corporis praesentium eligendi nulla illo numquam
          odit voluptatum!
        </Panel>

        <Panel
          onToggle={() => setIndex(2)}
          isOpen={index == 2}
          title="Ref là trong React là gì ?"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto
          quo cumque, aliquid corporis praesentium eligendi nulla illo numquam
          odit voluptatum!
        </Panel>
      </div>
    </BaseLayout>
  );
}
