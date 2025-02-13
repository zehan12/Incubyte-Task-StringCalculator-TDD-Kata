
export const SocialLinks = () => {
    const socialLinks = [
        { name: "GitHub", url: "https://github.com/zehan12" },
        { name: "Medium", url: "https://medium.com/@zehan9211" },
        { name: "LinkedIn", url: "https://www.linkedin.com/in/zehan-khan-6001a4144/" },
    ];

    return (
        <div className="flex space-x-4 justify-center mt-4">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition text-sm text-blue-700 hover:underline"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
};
