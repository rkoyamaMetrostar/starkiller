import './documentation.scss';

/* eslint-disable-next-line */
export interface IDocumentationProps {
    /**
     * Heading for documentation
     */
    heading: string;
    /**
     * Body for documentation
     */
    body: string;
}

export function Documentation({ heading, body }: IDocumentationProps) {
    return (
        <>
            <span className='documentation-heading'>{heading}</span>
            <p>{body}</p>
        </>
    );
}

export default Documentation;