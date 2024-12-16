import React, { useState } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

const RepoTreeView = ({ nodes }) => {
    const [checked, setChecked] = useState([]);
    const [expanded, setExpanded] = useState([]);

    return (
        <CheckboxTree
            nodes={nodes}
            checked={checked}
            expanded={expanded}
            onCheck={setChecked}
            onExpand={setExpanded}
        />
    );
};

export default RepoTreeView;