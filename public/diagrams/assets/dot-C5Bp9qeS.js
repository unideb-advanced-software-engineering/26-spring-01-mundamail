function n(e){switch(e){case"index":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=index,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    govagency [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Gov Agency</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">REST CLIENT</FONT></TD></TR></TABLE>>,
        likec4_id=govAgency,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgelayer [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">edgelayer</FONT>>,
        likec4_id=edgelayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    govagency -> edgelayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">intergrates</FONT></TD></TR></TABLE>>,
        likec4_id="1sc1jr7",
        minlen=1,
        style=dashed];
    user [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web/Mobile Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">User &amp; Admin Interfaces</FONT></TD></TR></TABLE>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> edgelayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">implements</FONT></TD></TR></TABLE>>,
        likec4_id="5wfkij",
        minlen=1,
        style=dashed];
    eventlayer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">eventlayer</FONT>>,
        likec4_id=eventlayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgelayer -> eventlayer [likec4_id="14nbut",
        style=dashed];
    processinglayer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">ProcessingLayer</FONT>>,
        likec4_id=ProcessingLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventlayer -> processinglayer [likec4_id="9zlcfh",
        style=dashed];
    persistencelayer [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<FONT POINT-SIZE="19">PersistenceLayer</FONT>>,
        likec4_id=PersistenceLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    processinglayer -> persistencelayer [likec4_id="11be3sm",
        minlen=1,
        style=dashed];
}
`;case"systemContextDiagram":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=systemContextDiagram,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    govagency [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Gov Agency</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">REST CLIENT</FONT></TD></TR></TABLE>>,
        likec4_id=govAgency,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgelayer [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">edgelayer</FONT>>,
        likec4_id=edgelayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    govagency -> edgelayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">intergrates</FONT></TD></TR></TABLE>>,
        likec4_id="1sc1jr7",
        minlen=1,
        style=dashed];
    user [color="#475569",
        fillcolor="#64748b",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web/Mobile Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#cbd5e1">User &amp; Admin Interfaces</FONT></TD></TR></TABLE>>,
        likec4_id=user,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    user -> edgelayer [label=<<TABLE BORDER="0" CELLPADDING="3" CELLSPACING="0" BGCOLOR="#18191bA0"><TR><TD ALIGN="TEXT" BALIGN="LEFT"><FONT POINT-SIZE="14">implements</FONT></TD></TR></TABLE>>,
        likec4_id="5wfkij",
        minlen=1,
        style=dashed];
    eventlayer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">eventlayer</FONT>>,
        likec4_id=eventlayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgelayer -> eventlayer [likec4_id="14nbut",
        style=dashed];
    processinglayer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">ProcessingLayer</FONT>>,
        likec4_id=ProcessingLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventlayer -> processinglayer [likec4_id="9zlcfh",
        style=dashed];
    persistencelayer [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<FONT POINT-SIZE="19">PersistenceLayer</FONT>>,
        likec4_id=PersistenceLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    processinglayer -> persistencelayer [likec4_id="11be3sm",
        minlen=1,
        style=dashed];
}
`;case"webClientStructure":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=webClientStructure,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    usermobile [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Mobile App</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Native mobile interface</FONT></TD></TR></TABLE>>,
        likec4_id="user.userMobile",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    userweb [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Web Client</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Browser-based UI</FONT></TD></TR></TABLE>>,
        likec4_id="user.userWeb",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    usermobile -> userweb [style=invis];
    admin [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Admin Portal</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#c7d2fe">Administrative interface</FONT></TD></TR></TABLE>>,
        likec4_id="user.admin",
        likec4_level=0,
        margin="0.278,0.306",
        width=4.445];
    userweb -> admin [style=invis];
}
`;case"containerView":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=containerView,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    edgelayer [color="#4f46e5",
        fillcolor="#6366f1",
        fontcolor="#eef2ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">edgelayer</FONT>>,
        likec4_id=edgelayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventlayer [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<FONT POINT-SIZE="19">eventlayer</FONT>>,
        likec4_id=eventlayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    edgelayer -> eventlayer [likec4_id="14nbut",
        minlen=1,
        style=dashed];
    processinglayer [color="#2d5d39",
        fillcolor="#428a4f",
        fontcolor="#f8fafc",
        height=2.5,
        label=<<FONT POINT-SIZE="19">ProcessingLayer</FONT>>,
        likec4_id=ProcessingLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    eventlayer -> processinglayer [likec4_id="9zlcfh",
        style=dashed];
    persistencelayer [color="#7E451D",
        fillcolor="#A35829",
        fontcolor="#FFE0C2",
        height=2.5,
        label=<<FONT POINT-SIZE="19">PersistenceLayer</FONT>>,
        likec4_id=PersistenceLayer,
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    processinglayer -> persistencelayer [likec4_id="11be3sm",
        minlen=1,
        style=dashed];
}
`;case"eventLayerComponents":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=eventLayerComponents,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    identityserver [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Identity Server</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">OAuth 2.0 , LDAP/SAML</FONT></TD></TR></TABLE>>,
        likec4_id="eventlayer.identityServer",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    rolemodule [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">RBAC Module</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Role-based access control</FONT></TD></TR></TABLE>>,
        likec4_id="eventlayer.roleModule",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    identityserver -> rolemodule [style=invis];
    eventbus [color="#0369a1",
        fillcolor="#0284c7",
        fontcolor="#f0f9ff",
        height=2.389,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Event Bus</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#B6ECF7">Topics: msg.inbound, msg.outbound, msg.audit,<BR/>msg.dlq</FONT></TD></TR></TABLE>>,
        likec4_id="eventlayer.eventBus",
        likec4_level=0,
        margin="0.278,0.223",
        width=4.445];
    rolemodule -> eventbus [style=invis];
}
`;case"processingLayerComponents":return`digraph {
    graph [TBbalance=min,
        bgcolor=transparent,
        compound=true,
        fontname=Arial,
        fontsize=15,
        labeljust=l,
        labelloc=t,
        layout=dot,
        likec4_viewId=processingLayerComponents,
        nodesep=1.528,
        outputorder=nodesfirst,
        pad=0.209,
        rankdir=TB,
        ranksep=1.667,
        splines=spline
    ];
    node [color="#2563eb",
        fillcolor="#3b82f6",
        fontcolor="#eff6ff",
        fontname=Arial,
        label="\\N",
        penwidth=0,
        shape=rect,
        style=filled
    ];
    edge [arrowsize=0.75,
        color="#6E6E6E",
        fontcolor="#C6C6C6",
        fontname=Arial,
        fontsize=14,
        penwidth=2
    ];
    inspector [color="#853A2D",
        fillcolor="#AC4D39",
        fontcolor="#FBD3CB",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Content Inspector</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Blocks .exe .bat .sh at ingestion point</FONT></TD></TR></TABLE>>,
        likec4_id="ProcessingLayer.inspector",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workers [color="#853A2D",
        fillcolor="#AC4D39",
        fontcolor="#FBD3CB",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Message Workers</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Async consumers, DLQ, Retry &amp; backoff logic</FONT></TD></TR></TABLE>>,
        likec4_id="ProcessingLayer.workers",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    inspector -> workers [style=invis];
    bridge [color="#853A2D",
        fillcolor="#AC4D39",
        fontcolor="#FBD3CB",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">REST --&gt; SMTP Bridge</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Translates REST calls to IMAP/SMTP commands</FONT></TD></TR></TABLE>>,
        likec4_id="ProcessingLayer.bridge",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    workers -> bridge [style=invis];
    logger [color="#853A2D",
        fillcolor="#AC4D39",
        fontcolor="#FBD3CB",
        height=2.5,
        label=<<TABLE BORDER="0" CELLPADDING="0" CELLSPACING="4"><TR><TD><FONT POINT-SIZE="19">Audit Logger</FONT></TD></TR><TR><TD><FONT POINT-SIZE="15" COLOR="#f5b2a3">Tamper-evident log All API calls &amp; admin<BR/>events</FONT></TD></TR></TABLE>>,
        likec4_id="ProcessingLayer.logger",
        likec4_level=0,
        margin="0.223,0.223",
        width=4.445];
    bridge -> logger [style=invis];
}
`;default:throw new Error("Unknown viewId: "+e)}}function t(e){switch(e){case"index":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="1436pt"
 viewBox="0.00 0.00 780.00 1436.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1420.85)">
<!-- govagency -->
<g id="node1" class="node">
<title>govagency</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="320.04,-1405.8 0,-1405.8 0,-1225.8 320.04,-1225.8 320.04,-1405.8"/>
<text xml:space="preserve" text-anchor="start" x="108.27" y="-1321.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Gov Agency</text>
<text xml:space="preserve" text-anchor="start" x="111.26" y="-1297.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">REST CLIENT</text>
</g>
<!-- edgelayer -->
<g id="node2" class="node">
<title>edgelayer</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="535.04,-1083 215,-1083 215,-903 535.04,-903 535.04,-1083"/>
<text xml:space="preserve" text-anchor="start" x="333.3" y="-987.3" font-family="Arial" font-size="19.00" fill="#eef2ff">edgelayer</text>
</g>
<!-- user -->
<g id="node3" class="node">
<title>user</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-1405.8 430,-1405.8 430,-1225.8 750.04,-1225.8 750.04,-1405.8"/>
<text xml:space="preserve" text-anchor="start" x="512.93" y="-1321.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Web/Mobile Client</text>
<text xml:space="preserve" text-anchor="start" x="508.74" y="-1297.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">User &amp; Admin Interfaces</text>
</g>
<!-- eventlayer -->
<g id="node4" class="node">
<title>eventlayer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="535.04,-782 215,-782 215,-602 535.04,-602 535.04,-782"/>
<text xml:space="preserve" text-anchor="start" x="331.19" y="-686.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">eventlayer</text>
</g>
<!-- processinglayer -->
<g id="node5" class="node">
<title>processinglayer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="535.04,-481 215,-481 215,-301 535.04,-301 535.04,-481"/>
<text xml:space="preserve" text-anchor="start" x="304.26" y="-385.3" font-family="Arial" font-size="19.00" fill="#f8fafc">ProcessingLayer</text>
</g>
<!-- persistencelayer -->
<g id="node6" class="node">
<title>persistencelayer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="301.62" y="-84.3" font-family="Arial" font-size="19.00" fill="#ffe0c2">PersistenceLayer</text>
</g>
<!-- govagency&#45;&gt;edgelayer -->
<g id="edge1" class="edge">
<title>govagency&#45;&gt;edgelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.62,-1225.87C247.59,-1184.14 280.98,-1134.31 309.64,-1091.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="311.81,-1093.04 313.8,-1085.34 307.45,-1090.11 311.81,-1093.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-1143 273.97,-1165.8 346.11,-1165.8 346.11,-1143 273.97,-1143"/>
<text xml:space="preserve" text-anchor="start" x="276.97" y="-1150.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">intergrates</text>
</g>
<!-- edgelayer&#45;&gt;eventlayer -->
<g id="edge3" class="edge">
<title>edgelayer&#45;&gt;eventlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-903.1C375.02,-868.24 375.02,-828.09 375.02,-792.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-792.34 375.02,-784.84 372.4,-792.34 377.65,-792.34"/>
</g>
<!-- user&#45;&gt;edgelayer -->
<g id="edge2" class="edge">
<title>user&#45;&gt;edgelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.42,-1225.87C502.45,-1184.14 469.06,-1134.31 440.4,-1091.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.59,-1090.11 436.24,-1085.34 438.23,-1093.04 442.59,-1090.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-1143 488.97,-1165.8 566.55,-1165.8 566.55,-1143 488.97,-1143"/>
<text xml:space="preserve" text-anchor="start" x="491.97" y="-1150.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">implements</text>
</g>
<!-- eventlayer&#45;&gt;processinglayer -->
<g id="edge4" class="edge">
<title>eventlayer&#45;&gt;processinglayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-602.1C375.02,-567.24 375.02,-527.09 375.02,-491.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-491.34 375.02,-483.84 372.4,-491.34 377.65,-491.34"/>
</g>
<!-- processinglayer&#45;&gt;persistencelayer -->
<g id="edge5" class="edge">
<title>processinglayer&#45;&gt;persistencelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-301.1C375.02,-266.24 375.02,-226.09 375.02,-190.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-190.34 375.02,-182.84 372.4,-190.34 377.65,-190.34"/>
</g>
</g>
</svg>
`;case"systemContextDiagram":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="780pt" height="1436pt"
 viewBox="0.00 0.00 780.00 1436.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1420.85)">
<!-- govagency -->
<g id="node1" class="node">
<title>govagency</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="320.04,-1405.8 0,-1405.8 0,-1225.8 320.04,-1225.8 320.04,-1405.8"/>
<text xml:space="preserve" text-anchor="start" x="108.27" y="-1321.1" font-family="Arial" font-size="19.00" fill="#f0f9ff">Gov Agency</text>
<text xml:space="preserve" text-anchor="start" x="111.26" y="-1297.9" font-family="Arial" font-size="15.00" fill="#b6ecf7">REST CLIENT</text>
</g>
<!-- edgelayer -->
<g id="node2" class="node">
<title>edgelayer</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="535.04,-1083 215,-1083 215,-903 535.04,-903 535.04,-1083"/>
<text xml:space="preserve" text-anchor="start" x="333.3" y="-987.3" font-family="Arial" font-size="19.00" fill="#eef2ff">edgelayer</text>
</g>
<!-- user -->
<g id="node3" class="node">
<title>user</title>
<polygon fill="#64748b" stroke="#475569" stroke-width="0" points="750.04,-1405.8 430,-1405.8 430,-1225.8 750.04,-1225.8 750.04,-1405.8"/>
<text xml:space="preserve" text-anchor="start" x="512.93" y="-1321.1" font-family="Arial" font-size="19.00" fill="#f8fafc">Web/Mobile Client</text>
<text xml:space="preserve" text-anchor="start" x="508.74" y="-1297.9" font-family="Arial" font-size="15.00" fill="#cbd5e1">User &amp; Admin Interfaces</text>
</g>
<!-- eventlayer -->
<g id="node4" class="node">
<title>eventlayer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="535.04,-782 215,-782 215,-602 535.04,-602 535.04,-782"/>
<text xml:space="preserve" text-anchor="start" x="331.19" y="-686.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">eventlayer</text>
</g>
<!-- processinglayer -->
<g id="node5" class="node">
<title>processinglayer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="535.04,-481 215,-481 215,-301 535.04,-301 535.04,-481"/>
<text xml:space="preserve" text-anchor="start" x="304.26" y="-385.3" font-family="Arial" font-size="19.00" fill="#f8fafc">ProcessingLayer</text>
</g>
<!-- persistencelayer -->
<g id="node6" class="node">
<title>persistencelayer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="535.04,-180 215,-180 215,0 535.04,0 535.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="301.62" y="-84.3" font-family="Arial" font-size="19.00" fill="#ffe0c2">PersistenceLayer</text>
</g>
<!-- govagency&#45;&gt;edgelayer -->
<g id="edge1" class="edge">
<title>govagency&#45;&gt;edgelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M219.62,-1225.87C247.59,-1184.14 280.98,-1134.31 309.64,-1091.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="311.81,-1093.04 313.8,-1085.34 307.45,-1090.11 311.81,-1093.04"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="273.97,-1143 273.97,-1165.8 346.11,-1165.8 346.11,-1143 273.97,-1143"/>
<text xml:space="preserve" text-anchor="start" x="276.97" y="-1150.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">intergrates</text>
</g>
<!-- edgelayer&#45;&gt;eventlayer -->
<g id="edge3" class="edge">
<title>edgelayer&#45;&gt;eventlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-903.1C375.02,-868.24 375.02,-828.09 375.02,-792.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-792.34 375.02,-784.84 372.4,-792.34 377.65,-792.34"/>
</g>
<!-- user&#45;&gt;edgelayer -->
<g id="edge2" class="edge">
<title>user&#45;&gt;edgelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M530.42,-1225.87C502.45,-1184.14 469.06,-1134.31 440.4,-1091.56"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="442.59,-1090.11 436.24,-1085.34 438.23,-1093.04 442.59,-1090.11"/>
<polygon fill="#18191b" fill-opacity="0.627451" stroke="none" points="488.97,-1143 488.97,-1165.8 566.55,-1165.8 566.55,-1143 488.97,-1143"/>
<text xml:space="preserve" text-anchor="start" x="491.97" y="-1150.2" font-family="Arial" font-size="14.00" fill="#c6c6c6">implements</text>
</g>
<!-- eventlayer&#45;&gt;processinglayer -->
<g id="edge4" class="edge">
<title>eventlayer&#45;&gt;processinglayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-602.1C375.02,-567.24 375.02,-527.09 375.02,-491.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-491.34 375.02,-483.84 372.4,-491.34 377.65,-491.34"/>
</g>
<!-- processinglayer&#45;&gt;persistencelayer -->
<g id="edge5" class="edge">
<title>processinglayer&#45;&gt;persistencelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M375.02,-301.1C375.02,-266.24 375.02,-226.09 375.02,-190.28"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="377.65,-190.34 375.02,-182.84 372.4,-190.34 377.65,-190.34"/>
</g>
</g>
</svg>
`;case"webClientStructure":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="810pt"
 viewBox="0.00 0.00 350.00 810.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 795.05)">
<!-- usermobile -->
<g id="node1" class="node">
<title>usermobile</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="112.49" y="-695.3" font-family="Arial" font-size="19.00" fill="#eef2ff">Mobile App</text>
<text xml:space="preserve" text-anchor="start" x="83.73" y="-672.1" font-family="Arial" font-size="15.00" fill="#c7d2fe">Native mobile interface</text>
</g>
<!-- userweb -->
<g id="node2" class="node">
<title>userweb</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="113.56" y="-395.3" font-family="Arial" font-size="19.00" fill="#eef2ff">Web Client</text>
<text xml:space="preserve" text-anchor="start" x="100" y="-372.1" font-family="Arial" font-size="15.00" fill="#c7d2fe">Browser&#45;based UI</text>
</g>
<!-- admin -->
<g id="node3" class="node">
<title>admin</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="105.64" y="-95.3" font-family="Arial" font-size="19.00" fill="#eef2ff">Admin Portal</text>
<text xml:space="preserve" text-anchor="start" x="82.07" y="-72.1" font-family="Arial" font-size="15.00" fill="#c7d2fe">Administrative interface</text>
</g>
<!-- usermobile&#45;&gt;userweb -->
<!-- userweb&#45;&gt;admin -->
</g>
</svg>
`;case"containerView":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="350pt" height="1110pt"
 viewBox="0.00 0.00 350.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- edgelayer -->
<g id="node1" class="node">
<title>edgelayer</title>
<polygon fill="#6366f1" stroke="#4f46e5" stroke-width="0" points="320.04,-1080 0,-1080 0,-900 320.04,-900 320.04,-1080"/>
<text xml:space="preserve" text-anchor="start" x="118.3" y="-984.3" font-family="Arial" font-size="19.00" fill="#eef2ff">edgelayer</text>
</g>
<!-- eventlayer -->
<g id="node2" class="node">
<title>eventlayer</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="320.04,-780 0,-780 0,-600 320.04,-600 320.04,-780"/>
<text xml:space="preserve" text-anchor="start" x="116.19" y="-684.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">eventlayer</text>
</g>
<!-- processinglayer -->
<g id="node3" class="node">
<title>processinglayer</title>
<polygon fill="#428a4f" stroke="#2d5d39" stroke-width="0" points="320.04,-480 0,-480 0,-300 320.04,-300 320.04,-480"/>
<text xml:space="preserve" text-anchor="start" x="89.26" y="-384.3" font-family="Arial" font-size="19.00" fill="#f8fafc">ProcessingLayer</text>
</g>
<!-- persistencelayer -->
<g id="node4" class="node">
<title>persistencelayer</title>
<polygon fill="#a35829" stroke="#7e451d" stroke-width="0" points="320.04,-180 0,-180 0,0 320.04,0 320.04,-180"/>
<text xml:space="preserve" text-anchor="start" x="86.62" y="-84.3" font-family="Arial" font-size="19.00" fill="#ffe0c2">PersistenceLayer</text>
</g>
<!-- edgelayer&#45;&gt;eventlayer -->
<g id="edge1" class="edge">
<title>edgelayer&#45;&gt;eventlayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-900.4C160.02,-865.73 160.02,-825.81 160.02,-790.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-790.3 160.02,-782.8 157.4,-790.3 162.65,-790.3"/>
</g>
<!-- eventlayer&#45;&gt;processinglayer -->
<g id="edge2" class="edge">
<title>eventlayer&#45;&gt;processinglayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-600.4C160.02,-565.73 160.02,-525.81 160.02,-490.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-490.3 160.02,-482.8 157.4,-490.3 162.65,-490.3"/>
</g>
<!-- processinglayer&#45;&gt;persistencelayer -->
<g id="edge3" class="edge">
<title>processinglayer&#45;&gt;persistencelayer</title>
<path fill="none" stroke="#6e6e6e" stroke-width="2" stroke-dasharray="5,2" d="M160.02,-300.4C160.02,-265.73 160.02,-225.81 160.02,-190.19"/>
<polygon fill="#6e6e6e" stroke="#6e6e6e" stroke-width="2" points="162.65,-190.3 160.02,-182.8 157.4,-190.3 162.65,-190.3"/>
</g>
</g>
</svg>
`;case"eventLayerComponents":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="397pt" height="802pt"
 viewBox="0.00 0.00 397.00 802.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 787.06)">
<!-- identityserver -->
<g id="node1" class="node">
<title>identityserver</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="343.71,-772.01 23.67,-772.01 23.67,-592.01 343.71,-592.01 343.71,-772.01"/>
<text xml:space="preserve" text-anchor="start" x="122.44" y="-687.31" font-family="Arial" font-size="19.00" fill="#f0f9ff">Identity Server</text>
<text xml:space="preserve" text-anchor="start" x="101.56" y="-664.11" font-family="Arial" font-size="15.00" fill="#b6ecf7">OAuth 2.0 , LDAP/SAML</text>
</g>
<!-- rolemodule -->
<g id="node2" class="node">
<title>rolemodule</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="343.71,-472.01 23.67,-472.01 23.67,-292.01 343.71,-292.01 343.71,-472.01"/>
<text xml:space="preserve" text-anchor="start" x="123.5" y="-387.31" font-family="Arial" font-size="19.00" fill="#f0f9ff">RBAC Module</text>
<text xml:space="preserve" text-anchor="start" x="95.31" y="-364.11" font-family="Arial" font-size="15.00" fill="#b6ecf7">Role&#45;based access control</text>
</g>
<!-- eventbus -->
<g id="node3" class="node">
<title>eventbus</title>
<polygon fill="#0284c7" stroke="#0369a1" stroke-width="0" points="367.38,-172.01 0,-172.01 0,0 367.38,0 367.38,-172.01"/>
<text xml:space="preserve" text-anchor="start" x="140.39" y="-100.3" font-family="Arial" font-size="19.00" fill="#f0f9ff">Event Bus</text>
<text xml:space="preserve" text-anchor="start" x="24.02" y="-77.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">Topics: msg.inbound, msg.outbound, msg.audit,</text>
<text xml:space="preserve" text-anchor="start" x="157.43" y="-59.1" font-family="Arial" font-size="15.00" fill="#b6ecf7">msg.dlq</text>
</g>
<!-- identityserver&#45;&gt;rolemodule -->
<!-- rolemodule&#45;&gt;eventbus -->
</g>
</svg>
`;case"processingLayerComponents":return`<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN"
 "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<!-- Generated by graphviz version 13.1.2 (0)
 -->
<!-- Pages: 1 -->
<svg width="399pt" height="1110pt"
 viewBox="0.00 0.00 399.00 1110.00" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g id="graph0" class="graph" transform="scale(1 1) rotate(0) translate(15.05 1095.05)">
<!-- inspector -->
<g id="node1" class="node">
<title>inspector</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="344.7,-1080 24.66,-1080 24.66,-900 344.7,-900 344.7,-1080"/>
<text xml:space="preserve" text-anchor="start" x="109.69" y="-995.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Content Inspector</text>
<text xml:space="preserve" text-anchor="start" x="60.86" y="-972.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Blocks .exe .bat .sh at ingestion point</text>
</g>
<!-- workers -->
<g id="node2" class="node">
<title>workers</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="356.46,-780 12.91,-780 12.91,-600 356.46,-600 356.46,-780"/>
<text xml:space="preserve" text-anchor="start" x="108.14" y="-695.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Message Workers</text>
<text xml:space="preserve" text-anchor="start" x="32.96" y="-672.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Async consumers, DLQ, Retry &amp; backoff logic</text>
</g>
<!-- bridge -->
<g id="node3" class="node">
<title>bridge</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="369.36,-480 0,-480 0,-300 369.36,-300 369.36,-480"/>
<text xml:space="preserve" text-anchor="start" x="85.7" y="-395.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">REST &#45;&#45;&gt; SMTP Bridge</text>
<text xml:space="preserve" text-anchor="start" x="20.06" y="-372.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Translates REST calls to IMAP/SMTP commands</text>
</g>
<!-- logger -->
<g id="node4" class="node">
<title>logger</title>
<polygon fill="#ac4d39" stroke="#853a2d" stroke-width="0" points="344.7,-180 24.66,-180 24.66,0 344.7,0 344.7,-180"/>
<text xml:space="preserve" text-anchor="start" x="130.81" y="-104.3" font-family="Arial" font-size="19.00" fill="#fbd3cb">Audit Logger</text>
<text xml:space="preserve" text-anchor="start" x="48.79" y="-81.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">Tamper&#45;evident log All API calls &amp; admin</text>
<text xml:space="preserve" text-anchor="start" x="162.59" y="-63.1" font-family="Arial" font-size="15.00" fill="#f5b2a3">events</text>
</g>
<!-- inspector&#45;&gt;workers -->
<!-- workers&#45;&gt;bridge -->
<!-- bridge&#45;&gt;logger -->
</g>
</svg>
`;default:throw new Error("Unknown viewId: "+e)}}export{n as dotSource,t as svgSource};
